<?php

namespace App\Controller;

use App\Data\SearchData;
use App\Entity\Link;
use App\Form\LinkType;
use App\Form\SearchForm;
use App\Repository\LinkRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
	/**
	 * @Route("/", name="root")
	 *
	 * @param Request $request
	 * @param LinkRepository $linkRepository
	 * @return Response
	 */
    public function index(Request $request, LinkRepository $linkRepository): Response
    {
    	$data = new SearchData();
    	$filterForm = $this->createForm(SearchForm::class, $data);
    	$filterForm->handleRequest($request);
	    $form = $this->createForm(LinkType::class, new Link);
    	$links = $linkRepository->findAllLinks($data);
        return $this->render('page/index.html.twig', [
        	'links'      => $links,
	        'filterForm' => $filterForm->createView(),
	        'form'       => $form->createView()
        ]);
    }
}
