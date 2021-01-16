<?php

declare(strict_types=1);

namespace App\Security\Voter;

use App\Entity\Link;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Security;

class LinkVoter extends AccessVoter
{

	private Security $security;

	public function __construct(Security $security)
	{
		$this->security = $security;
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

		parent::voteOnAttribute($attribute, $subject, $token);
	}

}
