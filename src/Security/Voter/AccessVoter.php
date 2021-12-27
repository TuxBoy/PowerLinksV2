<?php

declare(strict_types=1);

namespace App\Security\Voter;

use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

abstract class AccessVoter extends Voter
{

	protected const EDIT = 'edit';
	protected const VIEW = 'view';

	protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
	{
		$user = $token->getUser();

		if (!$user instanceof User) {
			return false;
		}

		switch ($attribute) {
			case static::EDIT:
				return $this->canEdit($subject, $user);
			case static::VIEW:
				return $this->canView($subject, $user);
		}

		throw new \LogicException('This code should not be reached!');
	}

	protected function canEdit(object $entity, UserInterface $currentUser): bool
	{
		if ($entity instanceof UserInterface) {
			return $currentUser === $entity;
		}
		if (!method_exists($entity, 'getUser')) {
			throw new \Exception("Il faut que l'entité soit rattaché à un user");
		}

		return $currentUser === $entity->getUser();
	}

	protected function canView(object $entity, UserInterface $currentUser): bool
	{
		return $this->canEdit($entity, $currentUser);
	}

}
