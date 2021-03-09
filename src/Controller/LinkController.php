<?php
declare(strict_types=1);

namespace App\Controller;

use App\Data\SearchData;
use App\Entity\Link;
use App\Event\LinkCreatedEvent;
use App\Form\LinkForm;
use App\Repository\LinkRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityNotFoundException;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class LinkController extends BaseController
{
	/**
	 * @Route("/tous-les-liens", name="link.index")
	 *
	 * @param LinkRepository $linkRepository
	 * @param SearchData $data
	 * @param PaginatorInterface $paginator
	 * @param Request $request
	 * @return Response
	 */
    public function index(
    	LinkRepository $linkRepository,
	    SearchData $data,
	    PaginatorInterface $paginator,
	    Request $request
    ): Response {

    	$pagination = $paginator->paginate(
    		$linkRepository->findAllLinks($data),
			$request->query->getInt('page', 1),
		    15
	    );

        return $this->render('link/index.html.twig', [
        	'pagination' => $pagination,
	        'menu'  => 'link',
        ]);
    }

	/**
	 * @Route("/", name="link.save", methods={"POST"})
	 *
	 * @param Request $request
	 * @param EntityManagerInterface $entityManager
	 * @param EventDispatcherInterface $eventDispatcher
	 * @return Response
	 */
	public function save(
		Request $request,
		EntityManagerInterface $entityManager,
	    EventDispatcherInterface $eventDispatcher
	): Response {
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

			$eventDispatcher->dispatch(new LinkCreatedEvent($link));

			return $this->redirectToHome('Le lien a bien été ajouté.');
		}

		return $this->redirectToHome("Le lien n'est pas valide.", 'error');
    }

	/**
	 * @Route("/lien/modifier/{link}", name="link.edit", methods={"POST", "GET"})
	 *
	 * @param Link $link
	 * @param Request $request
	 * @param EntityManagerInterface $entityManager
	 * @return Response
	 */
	public function edit(
		Link $link,
		Request $request,
		EntityManagerInterface $entityManager,
		EventDispatcherInterface $eventDispatcher
	): Response {
		$this->denyAccessUnlessGranted('edit', $link);

		$form = $this->createForm(LinkForm::class, $link);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$link->setUpdatedAt(new DateTime());
			$entityManager->persist($link);
			$entityManager->flush();

			$eventDispatcher->dispatch(new LinkCreatedEvent($link));

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
	 * @Route("/link/seen/{link}", name="link.seen", methods={"GET"})
	 *
	 * @param Link $link
	 * @param LinkRepository $linkRepository
	 * @param EntityManagerInterface $entityManager
	 * @return Response
	 */
	public function seen(Link $link, LinkRepository $linkRepository, EntityManagerInterface $entityManager): Response
	{
		// On rajoute le lien dans la liste des liens vus par l'utilisateur si celui-ci est connecté.
		$user = $this->getCurrentUser();
		if ($user !== null) {
			$user->addView($link);
			$entityManager->persist($user);
			$entityManager->flush();
		}

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
	 * @param string $type
	 * @return Response
	 */
    private function redirectToHome(string $successMessage = null, string $type = 'success'): Response
    {
    	if (null !== $successMessage) {
		    $this->addFlash($type, $successMessage);
	    }
	    return $this->redirectToRoute('root');
    }
}
