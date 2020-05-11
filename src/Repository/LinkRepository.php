<?php

namespace App\Repository;

use App\Entity\Link;
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

	public function findAllLinks()
	{
		return $this->createQueryBuilder('l')
			->orderBy('l.created_at', 'DESC')
			->getQuery()
			->getResult();
    }

	public function findOrFail(int $id): Link
	{
		$link = $this->find($id);
		if (null === $link) {
			throw new EntityNotFoundException('Aucun résultat de trouvé pour cet identifiant');
		}

		return $link;
    }
}
