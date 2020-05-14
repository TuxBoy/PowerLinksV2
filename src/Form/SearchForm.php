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
				'choices' => ['Décroissant' => 'desc', 'Croissant' => 'asc'],
				'label'   => false
			])
			->add('seen', ChoiceType::class, [
				'choices' => ['Tout' => null, 'Vu' => true, 'Non vu' => false],
				'label'   => false
			])
			->add('search',
				TextType::class,
				['label' => false, 'required' => false, 'attr' => ['placeholder' => 'Rechercher par nom']]
			);
		;

		if (null !== $data->user) {
			$builder->add('onlyUser', CheckboxType::class, ['label' => 'Afficher mes liens', 'required' => false]);
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
