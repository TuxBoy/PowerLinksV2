<?php

declare(strict_types=1);

namespace UserInterface\Form\Type;

use Infrastructure\Doctrine\Repository\TagRepository;
use Symfony\Bridge\Doctrine\Form\DataTransformer\CollectionToArrayTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use UserInterface\Form\DataTransformer\TagsTransformer;

class TagType extends AbstractType
{
	public function __construct(private TagRepository $repository)
	{
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
