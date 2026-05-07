<?php

declare(strict_types=1);

namespace App\Mapper;

use App\Dto\BlockDto;
use App\Dto\PageDto;
use App\Dto\ZoneDto;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Contracts\Core\Repository\Values\Content\Location;
use Ibexa\Contracts\FieldTypePage\FieldType\LandingPage\Model\BlockValue;
use Ibexa\Contracts\FieldTypePage\FieldType\LandingPage\Model\Page;
use Ibexa\Contracts\FieldTypePage\FieldType\LandingPage\Model\Zone;
use Ibexa\FieldTypePage\FieldType\LandingPage\Value as LandingPageValue;

final class IbexaPageMapper
{
    /**
     * @param iterable<BlockMapperInterface> $blockMappers tagged services, ordered;
     *                                                    a passthrough fallback should come last.
     */
    public function __construct(private iterable $blockMappers)
    {
    }

    /**
     * Map a single block to its dto. Used by the twig `app_block_dto` fn
     * so per-block templates can inline their data — keeping editor-iframe
     * blocks data-fresh after drag-add and re-publish.
     */
    public function mapStandaloneBlock(BlockValue $block): BlockDto
    {
        return $this->mapBlock($block);
    }

    public function map(Location $location, Content $content): ?PageDto
    {
        $page = $this->extractPage($content);
        if ($page === null) {
            return null;
        }

        return new PageDto(
            locationId: $location->id,
            contentId: $content->id,
            layout: $page->getLayout(),
            title: (string) $content->getName(),
            zones: array_map(fn (Zone $zone): ZoneDto => $this->mapZone($zone), $page->getZones()),
        );
    }

    private function extractPage(Content $content): ?Page
    {
        foreach ($content->getFields() as $field) {
            $value = $content->getFieldValue($field->fieldDefIdentifier);
            if ($value instanceof LandingPageValue) {
                return $value->getPage();
            }
        }

        return null;
    }

    private function mapZone(Zone $zone): ZoneDto
    {
        return new ZoneDto(
            id: $zone->getId(),
            name: $zone->getName(),
            blocks: array_map(fn (BlockValue $block): BlockDto => $this->mapBlock($block), $zone->getBlocks()),
        );
    }

    private function mapBlock(BlockValue $block): BlockDto
    {
        $type = $block->getType();

        $attributes = [];
        foreach ($this->blockMappers as $mapper) {
            if ($mapper->supports($type)) {
                $attributes = $mapper->mapAttributes($block);
                break;
            }
        }

        return new BlockDto(
            id: $block->getId(),
            type: $type,
            view: $block->getView() ?? 'default',
            name: $block->getName(),
            attributes: $attributes,
        );
    }
}
