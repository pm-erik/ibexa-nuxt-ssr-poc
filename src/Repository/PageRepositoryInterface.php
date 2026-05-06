<?php

declare(strict_types=1);

namespace App\Repository;

use App\Dto\PageDto;

interface PageRepositoryInterface
{
    public function findByLocationId(int $locationId): ?PageDto;
}
