<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;

abstract class CrudController extends AbstractController
{
	protected const MAX_PER_PAGE = 20;

	protected string $entity;

	protected string $formType = '';

	protected string $templatePath = '';

	protected string $redirectRouteName = '';

	protected EntityManagerInterface $em;

	private PaginatorInterface $paginator;

	private RequestStack $requestStack;

	public function __construct(EntityManagerInterface $em, PaginatorInterface $paginator, RequestStack $requestStack)
	{
		$this->em = $em;
		$this->paginator = $paginator;
		$this->requestStack = $requestStack;
	}

	protected function crudIndex(?array $items = null): Response
	{
		$items = $items ?? $this->getDoctrine()->getRepository($this->entity)->findAll();

		$page = $this->requestStack->getCurrentRequest()->query->getInt('page', 1);
		$pagination = $this->paginator->paginate($items, $page, static::MAX_PER_PAGE);
		return $this->render("admin/{$this->templatePath}/index.html.twig", ['items' => $pagination]);
	}

	/**
	 * @param object $entity
	 * @param Request $request
	 * @return Response
	 */
	public function crudEdit(object $entity, Request $request): Response
	{
		// To do ...
	}

	/**
	 * @param object $entity
	 * @return Response
	 */
	public function crudDelete(object $entity): Response
	{
		$this->em->remove($entity);
		$this->em->flush();

		$this->addFlash('success', "l'object a bien été supprimé");
		return $this->redirectToRoute('admin_' . $this->templatePath);
	}

}
