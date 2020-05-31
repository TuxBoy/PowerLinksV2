<?php

declare(strict_types=1);

namespace App\Form\Type;

use App\Form\DataTransformer\TagsTransformer;
use App\Repository\LinkRepository;
use App\Repository\TagRepository;
use Symfony\Bridge\Doctrine\Form\DataTransformer\CollectionToArrayTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TagType extends AbstractType
{

	private TagRepository $repository;

	public function __construct(TagRepository $repository)
	{
		$this->repository = $repository;
	}

	public function buildForm(FormBuilderInterface $builder, array $options): void
	{
		$builder
			->addModelTransformer(new CollectionToArrayTransformer(), true)
			->addModelTransformer(new TagsTransformer($this->repository), true)
		;
	}

	public function configureOptions(OptionsResolver $resolver): void
	{
		$resolver->setDefault('required', false);
	}

	public function getParent(): string
	{
		return TextType::class;
	}

}
