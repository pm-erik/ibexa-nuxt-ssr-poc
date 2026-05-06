<?php

declare(strict_types=1);

namespace App\Repository;

use App\Dto\PageDto;
use App\Mapper\IbexaPageMapper;
use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\Exceptions\NotFoundException;
use Ibexa\Contracts\Core\Repository\LocationService;

final class IbexaPageRepository implements PageRepositoryInterface
{
    public function __construct(
        private readonly LocationService $locationService,
        private readonly ContentService $contentService,
        private readonly IbexaPageMapper $mapper,
    ) {
    }

    public function findByLocationId(int $locationId): ?PageDto
    {
        try {
            $location = $this->locationService->loadLocation($locationId);
            $content = $this->contentService->loadContent((int) $location->contentId);
        } catch (NotFoundException) {
            return null;
        }

        return $this->mapper->map($location, $content);
    }
}
