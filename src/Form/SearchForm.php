<?php

declare(strict_types=1);

namespace App\Form;

use App\Data\SearchData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SearchForm extends AbstractType
{

	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		/** @var $data SearchData */
		$data = $builder->getData();
		$builder
			->add('orderBy',  ChoiceType::class, [
				'choices' => ['Moins résents' => 'asc', 'Plus récents' => 'desc'],
				'label'   => false,
				'attr'    => ['class' => 'form-select'],
			])
			->add('search',
				TextType::class,
				['label' => false, 'required' => false, 'attr' => ['placeholder' => 'Rechercher par nom / description']]
			);
		;

		if (null !== $data->user) {
			$builder->add('byCurrentUser', ChoiceType::class, [
				'choices' => ['Tout' => 'all', 'Mes liens' => 'me'],
				'label' => false,
				'required' => false,
				'attr'    => ['class' => 'form-select'],
			]);
		}
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class'      => SearchData::class,
			'method'          => 'GET',
			'csrf_protection' => false
		]);
	}

	public function getBlockPrefix()
	{
		return '';
	}

}
