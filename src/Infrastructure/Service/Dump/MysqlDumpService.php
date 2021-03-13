<?php

declare(strict_types=1);

namespace App\Infrastructure\Service\Dump;

use Ifsnop\Mysqldump\Mysqldump;

class MysqlDumpService implements DumpInterface
{

	private Mysqldump $mysqldump;

	public function __construct(string $dsn, string $username, string $password)
	{
		$this->mysqldump = new Mysqldump($dsn, $username, $password);
	}

	public function dump(string $filename): void
	{
		$this->mysqldump->start($filename);
	}
}
