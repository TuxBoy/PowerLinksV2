<?php

declare(strict_types=1);

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TwigMenuExtension extends AbstractExtension
{

	private const ACTIVE_CLASS = 'active';

	/**
	 * @return array<array-key, TwigFunction>
	 */
	public function getFunctions(): array
	{
		return [
			new TwigFunction('menu_is_active', [$this, 'menuIsActive'], ['needs_context' => true]),
		];
	}

	/**
	 * Retourne la classe active si la page courante est la même que le contexte.
	 *
	 * @param array $context
	 * @param string $currentPage
	 * @return string
	 */
	public function menuIsActive(array $context, string $currentPage): string
	{
		return ($context['menu'] ?? null) === $currentPage ? self::ACTIVE_CLASS : '';
	}

}
