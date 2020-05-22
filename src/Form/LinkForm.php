<?php

namespace App\Form;

use App\Entity\Link;
use SebastianBergmann\CodeCoverage\Report\Text;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class LinkForm extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	/** @var $link Link|null */
		$link = $builder->getData();
        $builder
            ->add('url', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'Url', 'class' => 'urlField']])
            ->add('name', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'Titre du lien', 'class' => 'title']])
            ->add('image', HiddenType::class, ['label' => false, 'attr' => ['class' => 'image']])
            ->add('description', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'Une courte description', 'class' => 'description']])
        ;

        if ($link && null !== $link->getId()) {
        	$builder->add('seen', CheckboxType::class, ['label' => 'Marquer comme vu', 'data' => false, 'required' => false]);
        }
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Link::class,
        ]);
    }
}
