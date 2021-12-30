<?php

declare(strict_types=1);

namespace Infrastructure\Service\Dump;

interface DumpInterface
{

	public function dump(string $filename): void;

}
