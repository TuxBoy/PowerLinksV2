<?php
declare(strict_types=1);

namespace App\Controller;

use App\Entity\Link;
use App\Form\LinkType;
use App\Repository\LinkRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityNotFoundException;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LinkController extends AbstractController
{
    /**
     * @Route("/link", name="link.index")
     */
    public function index(): Response
    {
        return $this->render('link/index.html.twig');
    }

	/**
	 * @Route("/", name="link.save", methods={"POST"})
	 *
	 * @param Request $request
	 * @param EntityManagerInterface $entityManager
	 * @return Response
	 * @throws Exception
	 */
	public function save(Request $request, EntityManagerInterface $entityManager)
	{
		$form = $this->createForm(LinkType::class, new Link);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			/** @var $link Link */
			$link = $form->getData();
			$link
				->setUser($this->getUser())
				->setCreatedAt(new DateTime())
				->setUpdatedAt(new DateTime());
			$entityManager->persist($link);
			$entityManager->flush();

			return $this->redirectToHome('Le lien a bien été ajouté.');
		}
    }

	/**
	 * @Route("/link/edit/{id}", name="link.edit", methods={"POST", "GET"})
	 *
	 * @param int $id
	 * @param Request $request
	 * @param EntityManagerInterface $entityManager
	 * @param LinkRepository $linkRepository
	 * @return Response
	 * @throws EntityNotFoundException
	 */
	public function edit(int $id, Request $request, EntityManagerInterface $entityManager, LinkRepository $linkRepository)
	{
		$link = $linkRepository->findOrFail($id);
		$form = $this->createForm(LinkType::class, $link);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
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
	public function delete(int $id, EntityManagerInterface $entityManager, LinkRepository $linkRepository)
	{
		$entityManager->remove($linkRepository->findOrFail($id));
		$entityManager->flush();
		return $this->redirectToHome('Votre lien a bien été supprimé.');
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
