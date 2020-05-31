<?php

declare(strict_types=1);

namespace App\Data;

use App\Entity\User;
use Symfony\Component\Security\Core\Security;

class SearchData
{

	public string $orderBy = 'desc';

	public ?bool $seen = null;

	public ?User $user = null;

	public bool $onlyUser = false;

	public ?string $search = null;

	public function __construct(Security $security)
	{
		$this->user = $security->getUser();
	}

	/**
	 * @return string
	 */
	public function getOrderBy(): string
	{
		return strtoupper($this->orderBy);
	}

}
