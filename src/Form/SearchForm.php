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
				'choices' => ['Plus récents' => 'desc', 'Moins récents' => 'asc'],
				'label'   => false,
				'empty_data' => 'desc',
				'attr'    => ['class' => 'form-select'],
			])
			->add('search',
				TextType::class,
				['label' => false, 'required' => false, 'attr' => ['placeholder' => 'Rechercher par nom / description']]
			)
		;

		if (null !== $data->user) {
			$builder
				->add('byCurrentUser', ChoiceType::class, [
					'choices' => ['Tout' => 'all', 'Mes liens' => 'me'],
					'label' => false,
					'required' => false,
					'empty_data' => 'all',
					'attr'    => ['class' => 'form-select'],
				])
				->add('byView', ChoiceType::class, [
					'choices' => ['Déjà vu ?' => null, 'Oui' => true, 'Non' => false],
					'label'   => false,
					'attr'    => ['class' => 'form-select'],
				])
			;
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
