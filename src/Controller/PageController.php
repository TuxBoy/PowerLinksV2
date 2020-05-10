<?php

namespace App\Controller;

use App\Entity\Link;
use App\Form\LinkType;
use App\Repository\LinkRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    /**
     * @Route("/", name="root")
     */
    public function index(LinkRepository $linkRepository)
    {
	    $form = $this->createForm(LinkType::class, new Link);
    	$links = $linkRepository->findAllLinks();
        return $this->render('page/index.html.twig', ['links' => $links, 'form' => $form->createView()]);
    }
}
