<?php

namespace App\Controller;

use App\Entity\Link;
use App\Form\LinkType;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
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

			$this->addFlash('success', 'Le lien a bien été ajouté.');
			return $this->redirectToRoute('root');
		}
    }
}
