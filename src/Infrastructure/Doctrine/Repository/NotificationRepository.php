<?php

namespace Infrastructure\Doctrine\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Infrastructure\Doctrine\Entity\Notification;
use Infrastructure\Doctrine\Entity\User;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method Notification|null find($id, $lockMode = null, $lockVersion = null)
 * @method Notification|null findOneBy(array $criteria, array $orderBy = null)
 * @method Notification[]    findAll()
 * @method Notification[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NotificationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Notification::class);
    }

    private function getUserQuery(User $user): QueryBuilder
    {
    	return $this->createQueryBuilder('n')
		    ->select('n', 'u')
		    ->leftJoin('n.user', 'u')
		    ->where('n.user = :user')
		    ->setParameter('user', $user->getId())
		;
    }

	/**
	 * @param User $user
	 * @return Notification[]
	 */
	public function findByUser(User $user): array
	{
		return $this->getUserQuery($user)->getQuery()->getResult();
    }

	/**
	 * @param User|UserInterface $user
	 * @return Notification[]
	 */
	public function findAllNotView(UserInterface $user): array
	{
		return $this->getUserQuery($user)
			->andWhere('n.createdAt = n.updatedAt')
			->getQuery()
			->getResult()
		;
	}
}
