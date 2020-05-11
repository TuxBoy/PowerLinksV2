<?php

declare(strict_types=1);

namespace App\Data;

class SearchData
{

	public string $order_by = 'asc';

	public bool $seen = false;

	/**
	 * @return string
	 */
	public function getOrderBy(): string
	{
		return strtoupper($this->order_by);
	}

}
