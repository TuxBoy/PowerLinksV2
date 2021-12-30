<?php

declare(strict_types=1);

namespace Infrastructure\Symfony\Service\Notification;

use Infrastructure\Doctrine\Repository\NotificationRepository;
use Symfony\Component\Security\Core\Security;

// TODO create an interface for this class
final class NotificationService
{
	public function __construct(private NotificationRepository $notificationRepository, private Security $security)
	{
	}

	public function notificationCount(): int
	{
		return \count($this->getNotViewNotifications());
	}

	/**
	 * @return Notification[]
	 */
	public function getNotViewNotifications(): array
	{
		if ($this->security->getUser() === null) {
			return [];
		}

		return $this->notificationRepository->findAllNotView($this->security->getUser());
	}

}
