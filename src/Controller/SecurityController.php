<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use LogicException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
	/**
	 * @Route("/login", name="app_login")
	 *
	 * @param AuthenticationUtils $authenticationUtils
	 * @return Response
	 */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {
        	$this->addFlash('success', 'Vous êtes déjà connecté.');
            return $this->redirectToRoute('root');
        }

        $error        = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

	/**
	 * @Route("/register", name="user.register",  methods={"POST", "GET"})
	 *
	 * @param Request $request
	 * @param EntityManagerInterface $entityManager
	 * @param UserPasswordEncoderInterface $encoder
	 * @return Response
	 */
	public function register(
		Request $request,
		EntityManagerInterface $entityManager,
		UserPasswordEncoderInterface $encoder
	): Response {
		$user = new User();
		$form = $this->createForm(UserType::class, $user);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$user
				->setRoles([User::ROLES['user']])
				->setPassword($encoder->encodePassword($user, $user->getPassword()))
			;
			$entityManager->persist($user);
			$entityManager->flush();

			$this->addFlash('success', 'Bien joué ! Votr compte a bien été créé.');
			return $this->redirectToRoute('app_login');
		}
		return $this->render('security/register.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout(): void
    {
    	$this->addFlash('success', 'Vous êtes déconnecté.');
        throw new LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
