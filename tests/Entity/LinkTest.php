<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Link;
use PHPUnit\Framework\TestCase;

final class LinkTest extends TestCase
{

	/**
	 * @dataProvider dateIsNewProvider
	 */
	public function testLinkIsNew(\DateTime $dateTime, bool $expected): void
	{
		$link = new Link();
		$link->setCreatedAt($dateTime);

		$this->assertEquals($expected, $link->isNew());
	}

	public function dateIsNewProvider(): array
	{
		return [
			[new \DateTime(), true],
			[new \DateTime('-2month'), false],
			[new \DateTime('-1days'), true],
			[new \DateTime('-3days'), false],
		];
	}

}
