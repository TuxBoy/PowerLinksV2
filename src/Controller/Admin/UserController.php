<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\Admin\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class UserController extends CrudController
{

	protected string $entity = User::class;

	protected string $formType = UserType::class;

	protected string $templatePath = 'user';

	private UserRepository $userRepository;

	public function __construct(
		EntityManagerInterface $em,
		PaginatorInterface $paginator,
		RequestStack $requestStack,
		UserRepository $userRepository
	) {
		parent::__construct($em, $paginator, $requestStack);
		$this->userRepository = $userRepository;
	}

	/**
     * @Route("/user", name="index")
     */
    public function index(): Response
    {
    	return $this->crudIndex();
    }

	/**
	 * @Route("/user/edit/{user}", name="user_edit")
	 *
	 * @param User $user
	 * @param Request $request
	 * @return Response
	 */
	public function edit(User $user, Request $request): Response
	{
		$form = $this->createForm(UserType::class, $user);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$user->setUpdatedAt(new \DateTime());
			$this->em->persist($user);
			$this->em->flush();

			$this->addFlash('success', "L'utilisateur a bien été modifié");
			return $this->redirectToRoute('index');
		}
		return $this->render('admin/user/edit.html.twig', ['user' => $user, 'form' => $form->createView()]);
    }

	/**
	 * @Route("/user/delete/{user}", name="user_delete", methods={"DELETE"})
	 *
	 * @param User $user
	 * @return Response
	 */
	public function delete(User $user): Response
	{
		return $this->crudDelete($user);
    }

}
