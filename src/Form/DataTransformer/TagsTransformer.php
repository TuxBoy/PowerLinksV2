<?php
declare(strict_types=1);

namespace App\Form\DataTransformer;

use App\Entity\Tag;
use App\Repository\TagRepository;
use Symfony\Component\Form\DataTransformerInterface;

class TagsTransformer implements DataTransformerInterface
{

	private TagRepository $repository;

	public function __construct(TagRepository $repository)
	{
		$this->repository = $repository;
	}

	/**
	 * @inheritDoc
	 */
	public function transform($value): string
	{
		return join(',', $value);
	}

	/**
	 * @inheritDoc
	 */
	public function reverseTransform($value): array
	{
		if ($value === '' || $value === null) {
			return [];
		}
		$names    = array_unique(array_filter(array_map('trim', explode(',', $value))));
		$tags     = $this->repository->findBy(['name' => $names]);
		$newNames = array_diff($names, $tags);

		foreach ($newNames as $newName) {
			$tag    = (new Tag())->setName($newName);
			$tags[] = $tag;
		}

		return $tags;
	}
}
