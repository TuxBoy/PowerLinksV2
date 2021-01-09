<?php

declare(strict_types=1);

namespace App\Tests\Form\DataTransformer;

use App\Entity\Tag;
use App\Form\DataTransformer\TagsTransformer;
use App\Repository\TagRepository;
use PHPUnit\Framework\TestCase;
 use PHPUnit\Framework\MockObject\MockObject;

class TagsTransformerTest extends TestCase
{

	/**
	 * @covers \App\Form\DataTransformer\TagsTransformer::reverseTransform
	 */
	public function testWithEmptyString(): void
	{
		/** @var $repository MockObject|TagRepository */
		$repository = $this
			->getMockBuilder(TagRepository::class)
			->disableOriginalConstructor()
			->setMethods(['findBy'])
			->getMock();

		$transformer = new TagsTransformer($repository);

		$this->assertEmpty($transformer->reverseTransform(''));
		$this->assertEmpty($transformer->reverseTransform(null));
	}

	/**
	 * @covers \App\Form\DataTransformer\TagsTransformer::reverseTransform
	 */
	public function testWithOneTag(): void
	{
		/** @var $repository MockObject|TagRepository */
		$repository = $this
			->getMockBuilder(TagRepository::class)
			->disableOriginalConstructor()
			->setMethods(['findBy'])
			->getMock();

		$repository->expects($this->once())->method('findBy')->willReturn([]);
		$transformer = new TagsTransformer($repository);
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
		/** @var $repository MockObject|TagRepository */
		$repository = $this
			->getMockBuilder(TagRepository::class)
			->disableOriginalConstructor()
			->setMethods(['findBy'])
			->getMock();
		$tag         = (new Tag())->setName('foo');

		$repository->expects($this->once())->method('findBy')->willReturn([$tag]);
		$transformer = new TagsTransformer($repository);
		$tags        = $transformer->reverseTransform('foo');

		$this->assertNotEmpty($tags);
		$this->assertCount(1, $tags);
	}

	/**
	 * @covers \App\Form\DataTransformer\TagsTransformer::reverseTransform
	 */
	public function testWithTagSensibilityCase(): void
	{
		/** @var $repository MockObject|TagRepository */
		$repository = $this
			->getMockBuilder(TagRepository::class)
			->disableOriginalConstructor()
			->setMethods(['findBy'])
			->getMock();
		$tag  = (new Tag())->setName('foo');
		$tag2 = (new Tag())->setName('bar');

		$repository->expects($this->once())->method('findBy')->willReturn([$tag, $tag2]);
		$transformer = new TagsTransformer($repository);
		$tags        = $transformer->reverseTransform('Foo, Bar, test, foo');

		$this->assertNotEmpty($tags);
		$this->assertCount(3, $tags);
	}

	/**
	 * @covers \App\Form\DataTransformer\TagsTransformer::reverseTransform
	 */
	public function testAddMultipleTags(): void
	{
		/** @var $repository MockObject|TagRepository */
		$repository = $this
			->getMockBuilder(TagRepository::class)
			->disableOriginalConstructor()
			->setMethods(['findBy'])
			->getMock();
		$tag = (new Tag())->setName('foo');

		$repository->expects($this->once())->method('findBy')->willReturn([$tag]);
		$transformer = new TagsTransformer($repository);
		$tags        = $transformer->reverseTransform('foo,bar, test ');

		$this->assertNotEmpty($tags);
		$this->assertCount(3, $tags);
	}

}
