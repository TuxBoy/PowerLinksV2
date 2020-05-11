<?php

declare(strict_types=1);

namespace App\Form;

use App\Data\SearchData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SearchForm extends AbstractType
{

	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('order_by',  ChoiceType::class, [
					'choices' => ['Croissant' => 'asc', 'Décroissant' => 'desc']
				])
			->add('seen', CheckboxType::class, ['required' => false])
		;
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
