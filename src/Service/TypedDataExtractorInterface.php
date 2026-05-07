<?php

declare(strict_types=1);

namespace App\Service;

use Ibexa\Contracts\Core\Repository\Values\Content\Content;

/**
 * Per-content-type extractor that produces an arbitrary, content-type-specific
 * data shape attached to ContentSummaryDto.data. Mirrors ibexa's "view per
 * content type" pattern (e.g. embed/article vs embed/image vs embed/folder),
 * but in dto form so the client doesn't have to fetch anything extra.
 */
interface TypedDataExtractorInterface
{
    public function supports(string $contentTypeIdentifier): bool;

    /**
     * @return array<string, mixed>|null
     */
    public function extract(Content $content): ?array;
}
