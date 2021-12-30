<?php

declare(strict_types=1);

namespace Infrastructure\Symfony\Event;

use Infrastructure\Doctrine\Entity\Link;
use Symfony\Contracts\EventDispatcher\Event;

final class LinkCreatedEvent extends Event
{
	public function __construct(private Link $link)
	{
	}

	public function getLink(): Link
	{
		return $this->link;
	}
}
