<?php

namespace App\Controller\Admin;

use App\Entity\Link;
use App\Entity\User;
use App\Form\Admin\UserType;
use App\Form\LinkForm;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin", name="admin_")
 */
final class LinkController extends CrudController
{

	protected string $entity = Link::class;

	protected string $formType = LinkForm::class;

	protected string $templatePath = 'link';

	/**
	 * @Route("/link", name="link")
	 */
	public function index(): Response
	{
		return $this->crudIndex();
	}


	/**
	 * @Route("/link/edit/{link}", name="link_edit")
	 *
	 * @param Link $link
	 * @param Request $request
	 * @return Response
	 */
	public function edit(link $link, Request $request): Response
	{
		$form = $this->createForm(LinkForm::class, $link);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$link->setUpdatedAt(new \DateTime());
			$this->em->persist($link);
			$this->em->flush();

			$this->addFlash('success', "le lien a bien été modifié");
			return $this->redirectToRoute('admin_user');
		}
		return $this->render('admin/link/edit.html.twig', ['link' => $link, 'form' => $form->createView()]);
	}

	/**
	 * @Route("/user/delete/{link}", name="link_delete", methods={"DELETE"})
	 *
	 * @param Link $link
	 * @return Response
	 */
	public function delete(Link $link): Response
	{
		return $this->crudDelete($link);
	}

}
