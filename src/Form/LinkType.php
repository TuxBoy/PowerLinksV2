<?php

namespace App\Form;

use App\Entity\Link;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class LinkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('url', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'Url']])
            ->add('name', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'Nom du lien']])
            ->add('description', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'Une courte description']])
            ///->add('seen')
            //->add('created_at')
            //->add('updated_at')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Link::class,
        ]);
    }
}
