<?php

declare(strict_types=1);

namespace App\Tests\Twig;

use PHPUnit\Framework\TestCase;
use UserInterface\Twig\TwigTimeExtension;

final class TwigTimeExtensionTest extends TestCase
{

	public function testRenderAgoElement(): void
	{
		$twig = new TwigTimeExtension();

		$date = new \DateTime('2021-02-06');

		$this->assertEquals('<time-ago time="1612569600"></time-ago>', $twig->ago($date));
	}

	public function testRenderAgoElementWithPrefix(): void
	{
		$twig = new TwigTimeExtension();

		$date = new \DateTime('2021-02-06',);

		$this->assertEquals('<time-ago time="1612569600" prefix="Dans "></time-ago>', $twig->ago($date, 'Dans '));
	}

}
