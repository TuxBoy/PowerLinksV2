<?php

namespace UserInterface\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email')
	        ->add('username', TextType::class, ['label' => 'Login'])
            //->add('roles')
            ->add('password', RepeatedType::class, [
            	'type'           => PasswordType::class,
            	'first_options'  => ['label' => 'Mot de passe'],
	            'second_options' => ['label' => 'Confirmer votre mot passe']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
