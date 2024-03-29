<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use Infrastructure\Doctrine\Entity\Link;
use Infrastructure\Doctrine\Entity\User;
use PHPUnit\Framework\TestCase;

final class LinkTest extends TestCase
{

	/**
	 * @dataProvider dateIsNewProvider
	 * @param \DateTime $dateTime
	 * @param bool $expected
	 */
	public function testLinkIsNew(\DateTime $dateTime, bool $expected): void
	{
		$link = new Link();
		$link->setCreatedAt($dateTime);

		$this->assertEquals($expected, $link->isNew());
	}

	public function testCantRemoveWithUserNull(): void
	{
		$link = new Link();

		$this->assertFalse($link->canRemove(null));
	}

	public function testCanRemoveWithSimpleUser(): void
	{
		$user = (new User())->setId(1);
		$link = (new Link())->setUser($user);

		$this->assertTrue($link->canRemove($user));

		// User is not same
		$user = (new User())->setId(1);
		$link = (new Link())->setUser((new User())->setId(2));

		$this->assertFalse($link->canRemove($user));
	}

	public function testCanRemoveWithAdmin(): void
	{
		$user = (new User())->setId(1)->setRoles(['ROLE_ADMIN']);
		$link = (new Link())->setUser($user);

		$this->assertTrue($link->canRemove($user));

		// Simple user is different of admin user
		$user = (new User())->setId(1)->setRoles(['ROLE_ADMIN']);
		$link = (new Link())->setUser((new User())->setId(2));

		$this->assertTrue($link->canRemove($user));
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

	public function testIsNotPrivateForTheCurrentUser(): void
	{
		$user = (new User)->setId(1);
		$link = (new Link())
			->setPrivate(true)
			->setUser($user);
		;

		$this->assertFalse($link->isPrivate($user));
	}

	public function testIsPrivateForTheAllUser(): void
	{
		$user = (new User)->setId(1);
		$link = (new Link())
			->setPrivate(true)
			->setUser((new User())->setId(2));
		;

		$this->assertTrue($link->isPrivate($user));
	}

	public function testIsPrivateIfNotConnectedUser(): void
	{
		$link = (new Link())
			->setPrivate(true)
			->setUser((new User())->setId(2));
		;

		$this->assertTrue($link->isPrivate(null));
	}

}
