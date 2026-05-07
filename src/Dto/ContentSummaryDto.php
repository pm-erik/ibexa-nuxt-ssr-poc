<?php

declare(strict_types=1);

namespace App\Dto;

use OpenApi\Attributes as OA;

#[OA\Schema(
    description: 'Lightweight, ibexa-free summary of a referenced content item — enough to render a link, card, or embed without resolving anything else.',
)]
final class ContentSummaryDto
{
    /**
     * @param array<string, mixed>|null $data
     */
    public function __construct(
        #[OA\Property(description: 'Content id.')]
        public readonly int $id,
        #[OA\Property(description: 'Main location id (the one used for url generation).')]
        public readonly int $locationId,
        #[OA\Property(description: 'Content name (display title).')]
        public readonly string $name,
        #[OA\Property(description: 'Content type identifier (e.g. article, folder, image).')]
        public readonly string $contentTypeIdentifier,
        #[OA\Property(description: 'Public-site url to this content.', nullable: true)]
        public readonly ?string $url,
        #[OA\Property(
            description: 'Optional content-type-specific extras (e.g. image url, article intro). Shape depends on contentTypeIdentifier.',
            type: 'object',
            nullable: true,
            additionalProperties: new OA\AdditionalProperties(),
        )]
        public readonly ?array $data = null,
    ) {
    }
}
