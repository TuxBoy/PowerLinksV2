<?php

declare(strict_types=1);

namespace UserInterface\Controller;

use Infrastructure\Doctrine\Entity\User;
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
		return $this->getUser();
	}
}
