<?php

declare(strict_types=1);

namespace App\Security\Voter;

use App\Entity\User;

class UserVoter extends AccessVoter
{

	protected function supports(string $attribute, $subject): bool
	{
		if (!$subject instanceof User) {
			return false;
		}

		return true;
	}

}
