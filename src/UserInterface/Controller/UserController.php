<?php

declare(strict_types=1);

namespace UserInterface\Controller;

use Infrastructure\Doctrine\Repository\UserRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/compte", name="user.")
 */
final class UserController extends BaseController
{
	public function __construct(private UserRepository $userRepository)
	{
	}

	/**
	 * @Route("/profil/{id}", methods={"GET"}, name="profile")
	 *
	 * @param int $id
	 * @return Response
	 */
	public function profile(int $id): Response
	{
		$user = $this->userRepository->find($id);
		$this->denyAccessUnlessGranted('view', $user, 'Vous ne pouvez pas accéder à cette page');

		return $this->render('user/profile.html.twig', [
			'user' => $user,
			'menu' => 'profile',
			'totalLinks' => $user->getLinks()->count(),
		]);
	}

	/**
	 * @Route("/mes-favoris", name="favorites", methods={"GET"})
	 *
	 * @return Response
	 */
	public function favorites(): Response
	{
		$user = $this->getCurrentUser();
		$this->denyAccessUnlessGranted('view', $user, 'Vous ne pouvez pas accéder à cette page');

		return $this->render('user/favorites.html.twig', ['links' => $user->getFavoritesLink()]);
	}

	/**
	 * @Route("/liens/mes-liens", name="links", methods={"GET"})
	 *
	 * @param PaginatorInterface $paginator
	 * @param Request $request
	 * @return Response
	 */
	public function links(PaginatorInterface $paginator, Request $request): Response
	{
		$user = $this->getCurrentUser();
		$this->denyAccessUnlessGranted('view', $user, 'Vous ne pouvez pas accéder à cette page');

		$pagination = $paginator->paginate(
			$user->getLinks(),
			$request->query->getInt('page', 1),
			15
		);

		return $this->render('user/links.html.twig', ['pagination' => $pagination]);
	}

}
