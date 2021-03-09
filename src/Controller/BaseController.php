<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Security\Core\User\UserInterface;

abstract class BaseController extends AbstractController
{

	/**
	 * @return User|UserInterface|null
	 */
	protected function getCurrentUser(): ?User
	{
		$user = $this->getUser();

		if ($user === null) {
			throw new UnauthorizedHttpException("Il faut être conecter pour avoir accès à ce service");
		}

		return $user;
	}
}
