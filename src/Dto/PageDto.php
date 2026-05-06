<?php

declare(strict_types=1);

namespace App\Dto;

use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

#[OA\Schema(
    description: 'A page builder page, flattened to a domain-shaped tree of zones and blocks. No ibexa concepts leak into this shape.',
)]
final class PageDto
{
    public function __construct(
        #[OA\Property(description: 'Location id this page was loaded from.')]
        public readonly int $locationId,
        #[OA\Property(description: 'Content id backing the location.')]
        public readonly int $contentId,
        #[OA\Property(description: 'Layout identifier (e.g. default, two_columns).')]
        public readonly string $layout,
        #[OA\Property(description: 'Page title (content name).')]
        public readonly string $title,
        #[OA\Property(
            type: 'array',
            items: new OA\Items(ref: new Model(type: ZoneDto::class)),
        )]
        public readonly array $zones,
    ) {
    }
}
