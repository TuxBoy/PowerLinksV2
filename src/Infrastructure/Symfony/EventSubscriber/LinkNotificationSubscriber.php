<?php

declare(strict_types=1);

namespace Infrastructure\Symfony\EventSubscriber;

use Doctrine\ORM\EntityManagerInterface;
use Infrastructure\Doctrine\Entity\Notification;
use Infrastructure\Doctrine\Repository\UserRepository;
use Infrastructure\Symfony\Event\LinkCreatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class LinkNotificationSubscriber implements EventSubscriberInterface
{
	public function __construct(private EntityManagerInterface $em, private UserRepository $userRepository)
	{
	}

	public static function getSubscribedEvents(): array
	{
		return [
			LinkCreatedEvent::class => 'onLinkCreated',
		];
	}

	public function onLinkCreated(LinkCreatedEvent $event): void
	{
		// Dès qu'un lien a été créé, il faut ajouter une notification pour chaque utilisateur
		$link = $event->getLink();
		if ($link->getPrivate() === false) {
			$users = $this->userRepository->findAllUser($link->getUser());
			foreach ($users as $user) {
				$notification = (new Notification())
					->setUser($user)
					->setCreatedAt(new \DateTime())
					->setUpdatedAt(new \DateTime())
					->setChannel('link_created')
					->setMessage('Le lien ' . $link->getName() . ' a été ajouté.')
				;
				$this->em->persist($notification);
			}
			$this->em->flush();
		}
	}
}
