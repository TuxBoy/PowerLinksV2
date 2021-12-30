<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use Infrastructure\Doctrine\Entity\Link;
use Infrastructure\Doctrine\Entity\User;
use PHPUnit\Framework\TestCase;

/**
 * @coversDefaultClass \App\Entity\User
 */
final class UserTest extends TestCase
{

	/**
	 * @dataProvider alreadyLinkDataProvider
	 * @covers ::hasAlreadyView
	 * @param Link $userLink
	 * @param Link $link
	 * @param bool $expected
	 */
	public function testIfUserHasAlreadyLink(Link $userLink, Link $link, bool $expected): void
	{
		$user = (new User())->addView($link);

		$this->assertEquals($expected, $user->hasAlreadyView($userLink));
	}

	/**
	 * @covers ::hasAlreadyView
	 */
	public function testIfUserHasAlreadyLinkWithSameLink(): void
	{
		$link = $this->makeLink(2);
		$user = (new User())->addView($link);

		$this->assertTrue($user->hasAlreadyView($link));
	}

	private function makeLink(int $id): Link
	{
		return (new Link())->setId($id);
	}

	public function alreadyLinkDataProvider(): array
	{
		return [
			'Test ko' => [$this->makeLink(1), $this->makeLink(2), false],
			'Test null' => [new Link(), $this->makeLink(2), false],
		];
	}

}
