<?php

declare(strict_types=1);

namespace App\Dto;

use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

#[OA\Schema(
    description: 'A page builder page, flattened to a domain-shaped tree of zones and blocks. No ibexa concepts leak into this shape.',
)]
final readonly class PageDto
{
    public function __construct(
        #[OA\Property(description: 'Location id this page was loaded from.')]
        public int $locationId,
        #[OA\Property(description: 'Content id backing the location.')]
        public int $contentId,
        #[OA\Property(description: 'Layout identifier (e.g. default, two_columns).')]
        public string $layout,
        #[OA\Property(description: 'Page title (content name).')]
        public string $title,
        #[OA\Property(
            type: 'array',
            items: new OA\Items(ref: new Model(type: ZoneDto::class)),
        )]
        public array $zones,
    ) {
    }
}
