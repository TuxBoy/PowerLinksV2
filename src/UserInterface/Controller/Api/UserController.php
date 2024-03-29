<?php

declare(strict_types=1);

namespace UserInterface\Controller\Api;

use Doctrine\ORM\EntityManagerInterface;
use Infrastructure\Doctrine\Entity\Link;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use UserInterface\Controller\BaseController;

/**
 * @Route("/api", name="api_")
 */
class UserController extends BaseController
{

	/**
	 * @Route("/user/addFavorite/{link}", methods={"POST"}, name="user_favorite_add")
	 *
	 * @param Link $link
	 */
	public function addFavorite(Link $link, EntityManagerInterface $em): Response
	{
		$user = $this->getCurrentUser();
		$this->denyAccessUnlessGranted('edit', $user);

		$user->addFavoritesLink($link);

		$em->persist($user);
		$em->flush();

		return new JsonResponse(['success' => true, 'message' => 'le lien a bien été ajouté dans vos favoris']);
	}

	/**
	 * @Route("/user/deleteFavorite/{link}", methods={"POST"}, name="user_favorite_delete")
	 *
	 * @param Link $link
	 * @param EntityManagerInterface $em
	 */
	public function deleteFavorite(Link $link, EntityManagerInterface $em): JsonResponse
	{
		$user = $this->getCurrentUser();
		$user->removeFavoritesLink($link);

		$em->persist($user);
		$em->flush();

		return new JsonResponse(['success' => true, 'message' => 'le lien a bien été supprimé de vos favoris']);
	}

}
