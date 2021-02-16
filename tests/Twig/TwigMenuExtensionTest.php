<?php

declare(strict_types=1);

namespace App\Tests\Twig;

use App\Twig\TwigMenuExtension;
use PHPUnit\Framework\TestCase;

final class TwigMenuExtensionTest extends TestCase
{

	public function testWithGoodContext(): void
	{
		$menu = new TwigMenuExtension();

		$this->assertEquals('active', $menu->menuIsActive(['menu' => 'foo'], 'foo'));
	}

	public function testWithoutContext(): void
	{
		$menu = new TwigMenuExtension();

		$this->assertEmpty($menu->menuIsActive([], 'bar'));
	}

	public function testWithBadContext(): void
	{
		$menu = new TwigMenuExtension();

		$this->assertEmpty($menu->menuIsActive(['menu' => 'foo'], 'bar'));
	}

}
