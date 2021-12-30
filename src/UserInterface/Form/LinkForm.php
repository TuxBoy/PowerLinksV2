<?php

namespace UserInterface\Form;

use Infrastructure\Doctrine\Entity\Link;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use UserInterface\Form\Type\TagType;

class LinkForm extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	/** @var $link Link|null */
		$link = $builder->getData();
        $builder
            ->add('url', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'Url', 'class' => 'urlField', 'autofocus' => true]])
            ->add('name', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'Titre du lien', 'class' => 'title']])
            ->add('image', HiddenType::class, ['label' => false, 'attr' => ['class' => 'image']])
            ->add('description', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'Une courte description', 'class' => 'description']])
	        ->add('tags', TagType::class,
		        [
		        	'label' => false,
			        'attr' => ['placeholder' => 'Tags', 'class' => 'link_tags js-choice'],
		        ]
	        )
	        ->add('private', CheckboxType::class, ['label' => 'Mettre le lien en privé', 'required' => false,])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Link::class,
        ]);
    }
}
