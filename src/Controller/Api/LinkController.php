<?php
declare(strict_types=1);

namespace App\Controller\Api;

use App\Service\MetadataService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class LinkController
 *
 * @Route("/api", name="link.")
 */
class LinkController extends AbstractController
{

	/**
	 * @Route("/link/metadata", name="metadata", methods={"POST"})
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
			'image'       => $metadata->getImage()
		]);
	}

}
