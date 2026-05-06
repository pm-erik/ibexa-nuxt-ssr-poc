<?php

declare(strict_types=1);

namespace App\Mapper;

use Ibexa\Contracts\FieldTypePage\FieldType\LandingPage\Model\BlockValue;

interface BlockMapperInterface
{
    public function supports(string $blockType): bool;

    /**
     * @return array<string, mixed>
     */
    public function mapAttributes(BlockValue $block): array;
}
