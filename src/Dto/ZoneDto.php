<?php

declare(strict_types=1);

namespace App\Dto;

use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

#[OA\Schema(
    description: 'A named layout zone holding an ordered list of blocks.',
)]
final class ZoneDto
{
    public function __construct(
        #[OA\Property(description: 'Stable zone id (uuid).')]
        public readonly string $id,
        #[OA\Property(description: 'Zone name as defined by the layout (e.g. top, main, sidebar).')]
        public readonly string $name,
        #[OA\Property(
            type: 'array',
            items: new OA\Items(ref: new Model(type: BlockDto::class)),
        )]
        public readonly array $blocks,
    ) {
    }
}
