<?php

namespace Sym\TaskBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * TaskRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class TaskRepository extends EntityRepository
{
   public function getTasks()
   {
       return $this->createQueryBuilder('task')
           ->orderBy('task.created', 'DESC')
           ->getQuery()
           ->getResult();
   }


}
