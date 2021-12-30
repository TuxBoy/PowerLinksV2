<?php

declare(strict_types=1);

namespace Infrastructure\Symfony\Security\Voter;

use Infrastructure\Doctrine\Entity\Link;
use Infrastructure\Doctrine\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Security;

final class LinkVoter extends AccessVoter
{
	public function __construct(private Security $security)
	{
	}

	protected function supports(string $attribute, $subject): bool
	{
		if (!$subject instanceof Link) {
			return false;
		}

		return true;
	}

	/**
	 * @param string $attribute
	 * @param mixed|Link $subject
	 * @param TokenInterface $token
	 * @return bool
	 */
	protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
	{
		if ($this->security->isGranted(User::ROLES['admin'])) {
			return true;
		}

		return parent::voteOnAttribute($attribute, $subject, $token);
	}
}
