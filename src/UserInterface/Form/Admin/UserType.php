<?php

namespace UserInterface\Form\Admin;

use Infrastructure\Doctrine\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', TextType::class)
            ->add('email', EmailType::class)
            ->add('roles', ChoiceType::class, [
	            'required' => true,
	            'multiple' => false,
	            'expanded' => false,
	            'choices'  => [
		            'user' => User::ROLES['user'],
		            'admin' => User::ROLES['admin'],
	            ],

            ])
	        ->add('Editer', SubmitType::class)
        ;

        $builder->get('roles')
	        ->addModelTransformer(new CallbackTransformer(
	        	fn ($rolesArray) => join(', ', $rolesArray),
	        	fn ($rolesString) => explode(', ', $rolesString),
	        ));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
