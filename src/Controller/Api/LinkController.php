<?php
declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\LinkRepository;
use App\Service\MetadataService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class LinkController
 *
 * @Route("/api/link", name="api.link.")
 */
class LinkController extends AbstractController
{

	/**
	 * @Route("/metadata", name="metadata", methods={"POST"})
	 *
	 * @param Request $request
	 * @return Response
	 */
	public function sendMetadata(Request $request): Response
	{
		$content  = json_decode($request->getContent(), true);
		$metadata = new MetadataService(file_get_contents($content['url']));

		return new JsonResponse([
			'title'       => $metadata->getTitle(),
			'description' => $metadata->getDescription(),
			'image'       => $metadata->getImage(),
			'tags'        => join(', ', $metadata->getKeywords()),
		]);
	}

	/**
	 * @Route("/delete/{id}", name="delete", methods={"DELETE"})
	 * @param int $id
	 * @param EntityManagerInterface $entityManager
	 * @param LinkRepository $linkRepository
	 * @return Response
	 */
	public function delete(int $id, EntityManagerInterface $entityManager, LinkRepository $linkRepository): Response
	{
		/** @var $user User */
		$user = $this->getUser();
		$link = $linkRepository->findByUser($user, $id);
		if ($link === null) {
			return new JsonResponse(['message' => 'Impossible de supprimer un lien qui ne vous appartient pas.'], Response::HTTP_UNAUTHORIZED);
		}
		$entityManager->remove($link);
		$entityManager->flush();

		return new JsonResponse(['message' => 'Le lien a bien été supprimé.']);
	}

}
