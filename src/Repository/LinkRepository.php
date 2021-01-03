<?php

namespace App\Repository;

use App\Data\SearchData;
use App\Entity\Link;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityNotFoundException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Link|null find($id, $lockMode = null, $lockVersion = null)
 * @method Link|null findOneBy(array $criteria, array $orderBy = null)
 * @method Link[]    findAll()
 * @method Link[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LinkRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Link::class);
    }

	public function findAllLinks(SearchData $search, int $limit = null)
	{
		$query = $this
			->createQueryBuilder('l')
			->select('l', 'u')
			->join('l.user', 'u');

		if (null !== $search->seen) {
			$query->where('l.seen = :seen')
				->setParameter('seen', $search->seen);
		}

		if (!empty($search->search)) {
			$query
				->andWhere('l.description LIKE :description')
				->setParameter('description', "%{$search->search}%");
		}

		if (true === $search->onlyUser) {
			$query
				->andWhere('l.user = :user')
				->setParameter('user', $search->user->getId());
		}
		if (null !== $limit) {
			$query->setMaxResults($limit);
		}
		$query->orderBy('l.created_at', $search->getOrderBy());

		return $query->getQuery()->getResult();
    }

	public function findOrFail(int $id): Link
	{
		$link = $this->find($id);
		if (null === $link) {
			throw new EntityNotFoundException('Aucun résultat de trouvé pour cet identifiant');
		}

		return $link;
    }

	public function findByUser(User $user, int $id): ?Link
	{
		return $this->createQueryBuilder('l')
			->select('l', 'u')
			->leftJoin('l.user', 'u')
			->where('l.id = :id')
			->andWhere('l.user = :user')
			->setParameters([
				'id' => $id,
				'user' => $user->getId(),
			])
			->getQuery()->getSingleResult()
		;
    }
}
