<?php

declare(strict_types=1);

namespace UserInterface\Controller;

use Infrastructure\Doctrine\Entity\Link;
use Infrastructure\Doctrine\Repository\LinkRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use UserInterface\Dto\SearchData;
use UserInterface\Form\LinkForm;
use UserInterface\Form\SearchForm;

#[Route('/', name: 'root')]
final class PageController extends BaseController
{
	private const MAX_LINK_PER_PAGE = 15;

    public function __invoke(
    	Request $request,
	    LinkRepository $linkRepository,
	    SearchData $data
    ): Response {
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
