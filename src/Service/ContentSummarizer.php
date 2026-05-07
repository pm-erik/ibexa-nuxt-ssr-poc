<?php

declare(strict_types=1);

namespace App\Service;

use App\Dto\ContentSummaryDto;
use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\Exceptions\Exception as IbexaException;
use Ibexa\Contracts\Core\Repository\LocationService;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Contracts\Core\Repository\Values\Content\Location;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Throwable;

/**
 * Resolves an ibexa contentId/locationId into a flat ContentSummaryDto.
 * Returns null on missing/unauthorized — callers should never see ibexa exceptions.
 *
 * Eager per-call resolution; n+1 risk if a page references many contents.
 * Acceptable for the poc; production should consider batched resolution
 * orchestrated by IbexaPageMapper.
 */
final class ContentSummarizer
{
    /**
     * @param iterable<TypedDataExtractorInterface> $typedDataExtractors tagged services
     */
    public function __construct(
        private readonly ContentService $contentService,
        private readonly LocationService $locationService,
        private readonly UrlGeneratorInterface $urlGenerator,
        private readonly iterable $typedDataExtractors,
    ) {
    }

    public function summarizeByContentId(int $contentId): ?ContentSummaryDto
    {
        try {
            $content = $this->contentService->loadContent($contentId);

            return $this->summarizeContent($content);
        } catch (IbexaException | Throwable) {
            return null;
        }
    }

    public function summarizeContent(Content $content, ?Location $location = null, ?MappingContext $context = null): ?ContentSummaryDto
    {
        $location ??= $this->loadMainLocation($content);
        if ($location === null) {
            return null;
        }

        $context?->addRelatedContent((int) $content->id);

        $contentTypeIdentifier = $content->getContentType()->identifier;

        return new ContentSummaryDto(
            id: (int) $content->id,
            locationId: (int) $location->id,
            name: (string) $content->getName(),
            contentTypeIdentifier: $contentTypeIdentifier,
            url: $this->generateUrl($location),
            data: $this->extractTypedData($content, $contentTypeIdentifier),
        );
    }

    /**
     * @return array<string, mixed>|null
     */
    private function extractTypedData(Content $content, string $contentTypeIdentifier): ?array
    {
        foreach ($this->typedDataExtractors as $extractor) {
            if ($extractor->supports($contentTypeIdentifier)) {
                return $extractor->extract($content);
            }
        }
        return null;
    }

    private function loadMainLocation(Content $content): ?Location
    {
        $mainLocationId = $content->contentInfo->mainLocationId;
        if ($mainLocationId === null) {
            return null;
        }

        try {
            return $this->locationService->loadLocation((int) $mainLocationId);
        } catch (IbexaException | Throwable) {
            return null;
        }
    }

    private function generateUrl(Location $location): ?string
    {
        try {
            return $this->urlGenerator->generate(
                'ibexa.url.alias',
                ['locationId' => (int) $location->id],
            );
        } catch (Throwable) {
            return null;
        }
    }
}
