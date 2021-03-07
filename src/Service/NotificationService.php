<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Notification;
use App\Repository\NotificationRepository;
use Symfony\Component\Security\Core\Security;

class NotificationService
{
	private NotificationRepository $notificationRepository;

	private Security $security;

	/**
	 * NotificationService constructor
	 * 
	 * @param NotificationRepository $notificationRepository
	 * @param Security $security
	 */
	public function __construct(NotificationRepository $notificationRepository, Security $security)
	{
		$this->notificationRepository = $notificationRepository;
		$this->security = $security;
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
