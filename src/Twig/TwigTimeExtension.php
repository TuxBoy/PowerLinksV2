<?php

declare(strict_types=1);

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TwigTimeExtension extends AbstractExtension
{

	public function getFilters(): array
	{
		return [
			new TwigFilter('ago', [$this, 'ago'], ['is_safe' => ['html']]),
		];
	}

	public function ago(\DateTimeInterface $date, string $prefix = ''): string
	{
		$prefixAttribute = !empty($prefix) ? " prefix=\"{$prefix}\"" : '';

		return "<time-ago time=\"{$date->getTimestamp()}\"$prefixAttribute></time-ago>";
	}

}
