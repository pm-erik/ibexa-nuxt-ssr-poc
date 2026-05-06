<?php

declare(strict_types=1);

namespace App\Dto;

use OpenApi\Attributes as OA;

#[OA\Schema(
    description: 'A flat representation of a page builder block, decoupled from ibexa.',
)]
final class BlockDto
{
    public function __construct(
        #[OA\Property(description: 'Stable block id (uuid).')]
        public readonly string $id,
        #[OA\Property(description: 'Block type identifier (e.g. richtext, embed, gallery).')]
        public readonly string $type,
        #[OA\Property(description: 'Block view name.', example: 'default')]
        public readonly string $view,
        #[OA\Property(description: 'Optional editor-assigned name.', nullable: true)]
        public readonly ?string $name,
        #[OA\Property(
            description: 'Block-specific attributes. Shape depends on `type`.',
            type: 'object',
            additionalProperties: new OA\AdditionalProperties(),
        )]
        public readonly array $attributes,
    ) {
    }
}
