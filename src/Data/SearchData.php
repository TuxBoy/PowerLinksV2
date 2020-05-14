<?php

declare(strict_types=1);

namespace App\Data;

use App\Entity\User;

class SearchData
{

	public string $orderBy = 'desc';

	public ?bool $seen = null;

	public ?User $user = null;

	public bool $onlyUser = false;

	public ?string $search = null;

	public function __construct(?User $user)
	{
		$this->user = $user;
	}

	/**
	 * @return string
	 */
	public function getOrderBy(): string
	{
		return strtoupper($this->orderBy);
	}

}
