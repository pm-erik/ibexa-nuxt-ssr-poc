<?php

declare(strict_types=1);

namespace App\Mapper;

use App\Service\ContentSummarizer;
use Ibexa\Contracts\FieldTypePage\FieldType\LandingPage\Model\BlockValue;

final class IbexaEmbedBlockMapper implements BlockMapperInterface
{
    public function __construct(private readonly ContentSummarizer $summarizer)
    {
    }

    public function supports(string $blockType): bool
    {
        return $blockType === 'embed';
    }

    public function mapAttributes(BlockValue $block): array
    {
        $contentId = $this->intAttr($block, 'contentId');

        return [
            'contentId' => $contentId,
            'summary' => $contentId !== null ? $this->summarizer->summarizeByContentId($contentId) : null,
        ];
    }

    private function intAttr(BlockValue $block, string $name): ?int
    {
        $raw = $block->getAttribute($name)?->getValue();

        return $raw !== null && $raw !== '' ? (int) $raw : null;
    }
}
