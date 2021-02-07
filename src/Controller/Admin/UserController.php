<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\Admin\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin", name="admin_")
 */
final class UserController extends AbstractController
{

	private UserRepository $userRepository;

	public function __construct(UserRepository $userRepository)
	{
		$this->userRepository = $userRepository;
	}

	/**
     * @Route("/user", name="user")
     */
    public function index(): Response
    {
    	$users = $this->userRepository->findAll();
        return $this->render('admin/user/index.html.twig', ['users' => $users]);
    }


	/**
	 * @Route("/user/edit/{user}", name="user_edit")
	 *
	 * @param User $user
	 * @param Request $request
	 * @param EntityManagerInterface $em
	 * @return Response
	 */
	public function edit(User $user, Request $request, EntityManagerInterface $em): Response
	{
		$form = $this->createForm(UserType::class, $user);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$user->setUpdatedAt(new \DateTime());
			$em->persist($user);
			$em->flush();

			$this->addFlash('success', "L'utilisateur a bien été modifié");
			return $this->redirectToRoute('admin_user');
		}
		return $this->render('admin/user/edit.html.twig', ['user' => $user, 'form' => $form->createView()]);
    }

	/**
	 * @Route("/user/delete/{user}", name="user_delete", methods={"DELETE"})
	 *
	 * @param User $user
	 * @param EntityManagerInterface $em
	 * @return Response
	 */
	public function delete(User $user, EntityManagerInterface $em): Response
	{
		$em->remove($user);

		$this->addFlash('success', "L'utilisateur a bien été supprimé");
		return $this->redirectToRoute('admin_user');
    }

}
