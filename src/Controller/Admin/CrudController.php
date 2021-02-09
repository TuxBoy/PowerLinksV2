<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

abstract class CrudController extends AbstractController
{
	protected string $entity;

	protected string $formType = '';

	protected string $templatePath = '';

	protected string $redirectRouteName = '';

	protected EntityManagerInterface $em;

	public function __construct(EntityManagerInterface $em)
	{
		$this->em = $em;
	}

	protected function crudIndex(): Response
	{
		$items = $this->getDoctrine()->getRepository($this->entity)->findAll();
		return $this->render("admin/{$this->templatePath}/index.html.twig", ['items' => $items]);
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
