<?php
declare(strict_types=1);

namespace UserInterface\Form\DataTransformer;

use Infrastructure\Doctrine\Entity\Tag;
use Infrastructure\Doctrine\Repository\TagRepository;
use Symfony\Component\Form\DataTransformerInterface;

class TagsTransformer implements DataTransformerInterface
{

	public function __construct(private TagRepository $repository)
	{
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
		$names    = array_map(fn ($name) => strtolower($name), $names);
		$tags     = $this->repository->findBy(['name' => $names]);
		$newNames = array_diff($names, $tags);

		foreach ($newNames as $newName) {
			$tag    = (new Tag())->setName($newName);
			$tags[] = $tag;
		}

		return $tags;
	}
}
