<?php

declare(strict_types=1);

namespace App\Tests\Form\DataTransformer;

use Infrastructure\Doctrine\Entity\Tag;
use Infrastructure\Doctrine\Repository\TagRepository;
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use UserInterface\Form\DataTransformer\TagsTransformer;

final class TagsTransformerTest extends TestCase
{
	private MockObject|TagRepository|null $repository = null;

	protected function setUp(): void
	{
		parent::setUp();

		$this->repository = $this->createMock(TagRepository::class);
	}

	protected function tearDown(): void
	{
		$this->repository = null;

		parent::tearDown();
	}

	/**
	 * @covers \App\Form\DataTransformer\TagsTransformer::reverseTransform
	 */
	public function testWithEmptyString(): void
	{
		$transformer = new TagsTransformer($this->repository);

		$this->assertEmpty($transformer->reverseTransform(''));
		$this->assertEmpty($transformer->reverseTransform(null));
	}

	/**
	 * @covers \App\Form\DataTransformer\TagsTransformer::reverseTransform
	 */
	public function testWithOneTag(): void
	{
		$this->repository->expects($this->once())->method('findBy')->willReturn([]);

		$transformer = new TagsTransformer($this->repository);
		$tags        = $transformer->reverseTransform('foo');
		$tag         = (new Tag())->setName('foo');

		$this->assertCount(1, $tags);
		$this->assertEquals([$tag], $tags);
	}

	/**
	 * @covers \App\Form\DataTransformer\TagsTransformer::reverseTransform
	 */
	public function testWithTagAlreadyExist(): void
	{
		$tag = (new Tag())->setName('foo');

		$this->repository->expects($this->once())->method('findBy')->willReturn([$tag]);
		$transformer = new TagsTransformer($this->repository);
		$tags        = $transformer->reverseTransform('foo');

		$this->assertNotEmpty($tags);
		$this->assertCount(1, $tags);
	}

	/**
	 * @covers \App\Form\DataTransformer\TagsTransformer::reverseTransform
	 */
	public function testWithTagSensibilityCase(): void
	{
		$tag  = (new Tag())->setName('foo');
		$tag2 = (new Tag())->setName('bar');

		$this->repository->expects($this->once())->method('findBy')->willReturn([$tag, $tag2]);
		$transformer = new TagsTransformer($this->repository);
		$tags        = $transformer->reverseTransform('Foo, Bar, test, foo');

		$this->assertNotEmpty($tags);
		$this->assertCount(3, $tags);
	}

	/**
	 * @covers \App\Form\DataTransformer\TagsTransformer::reverseTransform
	 */
	public function testAddMultipleTags(): void
	{
		$tag = (new Tag())->setName('foo');

		$this->repository->expects($this->once())->method('findBy')->willReturn([$tag]);
		$transformer = new TagsTransformer($this->repository);
		$tags        = $transformer->reverseTransform('foo,bar, test ');

		$this->assertNotEmpty($tags);
		$this->assertCount(3, $tags);
	}

}
