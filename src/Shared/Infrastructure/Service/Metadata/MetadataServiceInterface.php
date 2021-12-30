<?php

declare(strict_types=1);

namespace Shared\Infrastructure\Service\Metadata;

interface MetadataServiceInterface
{
    public function getTitle(): ?string;

    public function getDescription(): ?string;

    public function getKeywords(): array;

    public function getImage(): ?string;
}