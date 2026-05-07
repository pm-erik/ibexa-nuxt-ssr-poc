<?php

declare(strict_types=1);

namespace App\Dto;

use OpenApi\Attributes as OA;

#[OA\Schema(
    description: 'A flat representation of a page builder block, decoupled from ibexa.',
)]
final readonly class BlockDto
{
    public function __construct(
        #[OA\Property(description: 'Stable block id (uuid).')]
        public string $id,
        #[OA\Property(description: 'Block type identifier (e.g. richtext, embed, gallery).')]
        public string $type,
        #[OA\Property(description: 'Block view name.', example: 'default')]
        public string $view,
        #[OA\Property(description: 'Optional editor-assigned name.', nullable: true)]
        public ?string $name,
        #[OA\Property(
            description: 'Block-specific attributes. Shape depends on `type`.',
            type: 'object',
            additionalProperties: new OA\AdditionalProperties(),
        )]
        public array $attributes,
    ) {
    }
}
