<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\NotificationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NotificationController extends BaseController
{
	/**
	 * @Route("/notification/{user}", name="notification_view")
	 *
	 * @param User $user
	 * @param NotificationRepository $notificationRepository
	 * @return Response
	 */
    public function index(User $user, NotificationRepository $notificationRepository): Response
    {
	    $notifications = $notificationRepository->findByUser($this->getCurrentUser());
	    return $this->render('notification/view.html.twig', [
		    'notifications' => $notifications,
	    ]);
    }

	/**
	 * @Route("/notification/update/{user}", name="notification_update")
	 *
	 * @param User $user
	 * @param EntityManagerInterface $em
	 * @param NotificationRepository $notificationRepository
	 * @return Response
	 */
	public function update(User $user, EntityManagerInterface $em, NotificationRepository $notificationRepository): Response
	{
		$notificationsNotView = $notificationRepository->findAllNotView($user);
		foreach ($notificationsNotView as $notification) {
			$notification->setUpdatedAt(new \DateTime());
			$em->persist($notification);
		}
		$em->flush();

		return new JsonResponse(['success' => true]);
    }

}
