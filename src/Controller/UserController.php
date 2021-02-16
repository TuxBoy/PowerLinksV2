<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class UserController extends AbstractController
{

	private UserRepository $userRepository;

	public function __construct(UserRepository $userRepository)
	{
		$this->userRepository = $userRepository;
	}

	/**
	 * @Route("/user/profile/{id}", methods={"GET"}, name="user.profile")
	 */
	public function profile(int $id): Response
	{
		$user = $this->userRepository->find($id);
		$this->denyAccessUnlessGranted('view', $user, 'Vous ne pouvez pas accéder à cette page');

		return $this->render('user/profile.html.twig', ['user' => $user, 'menu' => 'profile']);
	}

}
