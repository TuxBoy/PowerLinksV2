<?php

declare(strict_types=1);

namespace UserInterface\Dto;

use Infrastructure\Doctrine\Entity\User;
use Symfony\Component\Security\Core\Security;

final class SearchData
{
	public string $orderBy = 'desc';

	public ?bool $seen = null;

	public ?User $user = null;

	public string $byCurrentUser = 'all';

	public ?string $search = null;

	public ?bool $byView = null;

	public function __construct(Security $security)
	{
		$this->user = $security->getUser();
	}

	/**
	 * @return string
	 */
	public function getOrderBy(): ?string
	{
		return $this->orderBy ? strtoupper($this->orderBy) : 'DESC';
	}
}
