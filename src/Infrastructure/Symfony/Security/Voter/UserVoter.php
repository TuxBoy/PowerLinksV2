<?php

declare(strict_types=1);

namespace Infrastructure\Symfony\Security\Voter;

use Infrastructure\Doctrine\Entity\User;

final class UserVoter extends AccessVoter
{

	protected function supports(string $attribute, $subject): bool
	{
		if (!$subject instanceof User) {
			return false;
		}

		return true;
	}

}
