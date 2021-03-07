<?php

declare(strict_types=1);

namespace App\Event;

use App\Entity\Link;
use Symfony\Contracts\EventDispatcher\Event;

class LinkCreatedEvent extends Event
{

	private Link $link;

	public function __construct(Link $link)
	{
		$this->link = $link;
	}

	public function getLink(): Link
	{
		return $this->link;
	}

}
