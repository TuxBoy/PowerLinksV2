<?php
declare(strict_types=1);

namespace App\Tests\Voter;

use App\Entity\User;
use App\Security\Voter\UserVoter;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

final class UserVoterTest extends TestCase
{

	/**
	 * @var MockObject|TokenInterface
	 */
	private TokenInterface $token;

	protected function setUp(): void
	{
		parent::setUp();

		$this->token = $this
			->getMockBuilder(TokenInterface::class)
			->onlyMethods(['getUser'])
			->getMockForAbstractClass();
	}

	public function testAccessWithValidUser(): void
	{
		$user = new User();

		$this->token->expects($this->once())->method('getUser')->willReturn($user);
		$userVoter = new UserVoter();

		// 1 == GRANTED in VoterInterface
		$this->assertEquals(
			1,
			$userVoter->vote($this->token, $user, ['view'])
		);
	}

	public function testAccessDeniedWithBadAttribute(): void
	{
		$this->expectException(\LogicException::class);
		$this->expectExceptionMessage('This code should not be reached!');

		$user = new User();

		$this->token->expects($this->once())->method('getUser')->willReturn($user);
		(new UserVoter())->vote($this->token, $user, ['unknown']);
	}

	public function testAccessAbstainWithBadSubject(): void
	{
		$this->token->expects($this->never())
			->method('getUser')
			->willReturn(new User());

		$userVoter = new UserVoter();

		// 1 == ABSTAIN in VoterInterface
		$this->assertEquals(0, $userVoter->vote($this->token, new \stdClass(), ['view']));
	}

}
