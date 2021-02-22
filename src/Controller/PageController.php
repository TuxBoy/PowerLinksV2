<?php

namespace App\Controller;

use App\Data\SearchData;
use App\Entity\Link;
use App\Form\LinkForm;
use App\Form\SearchForm;
use App\Repository\LinkRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class PageController extends BaseController
{

	private const MAX_LINK_PER_PAGE = 15;

	/**
	 * @Route("/", name="root")
	 *
	 * @param Request $request
	 * @param LinkRepository $linkRepository
	 * @param SearchData $data
	 * @return Response
	 */
    public function index(Request $request, LinkRepository $linkRepository, SearchData $data): Response
    {
    	$filterForm = $this->createForm(SearchForm::class, $data);
    	$filterForm->handleRequest($request);

	    $form  = $this->createForm(LinkForm::class, new Link);
    	$links = $linkRepository->findAllLinks($data, self::MAX_LINK_PER_PAGE);
        return $this->render('page/index.html.twig', [
        	'links'      => $links,
	        'filterForm' => $filterForm->createView(),
	        'form'       => $form->createView(),
	        'menu'       => 'home',
        ]);
    }
}
