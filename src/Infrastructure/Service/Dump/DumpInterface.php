<?php

declare(strict_types=1);

namespace App\Infrastructure\Service\Dump;

interface DumpInterface
{

	public function dump(string $filename): void;

}
