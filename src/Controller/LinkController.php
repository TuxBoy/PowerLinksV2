<?php
declare(strict_types=1);

namespace App\Controller;

use App\Data\SearchData;
use App\Entity\Link;
use App\Form\LinkForm;
use App\Repository\LinkRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityNotFoundException;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class LinkController extends BaseController
{
	/**
	 * @Route("/link", name="link.index")
	 *
	 * @param LinkRepository $linkRepository
	 * @param SearchData $data
	 * @return Response
	 */
    public function index(LinkRepository $linkRepository, SearchData $data): Response
    {
        return $this->render('link/index.html.twig', [
        	'links' => $linkRepository->findAllLinks($data),
	        'menu'  => 'link',
        ]);
    }

	/**
	 * @Route("/", name="link.save", methods={"POST"})
	 *
	 * @param Request $request
	 * @param EntityManagerInterface $entityManager
	 * @return Response
	 * @throws Exception
	 */
	public function save(Request $request, EntityManagerInterface $entityManager): Response
	{
		$form = $this->createForm(LinkForm::class, new Link);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			/** @var $link Link */
			$link = $form->getData();
			$link
				->setUser($this->getUser())
				->setCreatedAt(new DateTime())
				->setUpdatedAt(new DateTime())
				->setSeen(false)
			;
			$entityManager->persist($link);
			$entityManager->flush();

			return $this->redirectToHome('Le lien a bien été ajouté.');
		}
    }

	/**
	 * @Route("/lien/modifier/{link}", name="link.edit", methods={"POST", "GET"})
	 *
	 * @param Link $link
	 * @param Request $request
	 * @param EntityManagerInterface $entityManager
	 * @return Response
	 */
	public function edit(Link $link, Request $request, EntityManagerInterface $entityManager): Response
	{
		$this->denyAccessUnlessGranted('edit', $link);

		$form = $this->createForm(LinkForm::class, $link);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$link->setUpdatedAt(new DateTime());
			$entityManager->persist($link);
			$entityManager->flush();

			return $this->redirectToHome('Votre lien a bien été edité.');
		}

		return $this->render('link/edit.html.twig', ['form' => $form->createView(), 'link' => $link]);
    }

	/**
	 * @Route("/link/delete/{id}", name="link.delete", methods={"DELETE"})
	 *
	 * @param int $id
	 * @param EntityManagerInterface $entityManager
	 * @param LinkRepository $linkRepository
	 * @return Response
	 * @throws EntityNotFoundException
	 */
	public function delete(int $id, EntityManagerInterface $entityManager, LinkRepository $linkRepository): Response
	{
		$entityManager->remove($linkRepository->findOrFail($id));
		$entityManager->flush();
		return $this->redirectToHome('Votre lien a bien été supprimé.');
    }

	/**
	 * @Route("/link/seen/{id}", name="link.seen", methods={"GET"})
	 *
	 * @param int $id
	 * @param LinkRepository $linkRepository
	 * @param EntityManagerInterface $entityManager
	 * @return Response
	 * @throws EntityNotFoundException
	 */
	public function seen(int $id, LinkRepository $linkRepository, EntityManagerInterface $entityManager): Response
	{
		$link = $linkRepository->findOrFail($id);

		return $this->redirect($link->getUrl());
    }

	/**
	 * @Route("/lien/mes-liens-prives", name="link.private", methods={"GET"})
	 *
	 * @param LinkRepository $linkRepository
	 * @return Response
	 */
	public function private(LinkRepository $linkRepository): Response
	{
		$linksOfCurrentUser = $linkRepository->findPrivateOfCurrentUser($this->getCurrentUser());
		return $this->render('link/private.html.twig', ['links' => $linksOfCurrentUser, 'active' => 'private']);
    }

	/**
	 * Redirige vers la home page avec un message flash si celui ci est défini.
	 *
	 * @param string|null $successMessage
	 * @return Response
	 */
    private function redirectToHome(string $successMessage = null): Response
    {
    	if (null !== $successMessage) {
		    $this->addFlash('success', $successMessage);
	    }
	    return $this->redirectToRoute('root');
    }
}
