<?php

declare(strict_types=1);

namespace App\EventSubscriber;

use App\Entity\Notification;
use App\Event\LinkCreatedEvent;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class LinkNotificationSubscriber implements EventSubscriberInterface
{

	private EntityManagerInterface $em;

	private UserRepository $userRepository;

	public function __construct(EntityManagerInterface $em, UserRepository $userRepository)
	{
		$this->em = $em;
		$this->userRepository = $userRepository;
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
