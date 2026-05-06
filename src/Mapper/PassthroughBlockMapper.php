<?php

declare(strict_types=1);

namespace App\Mapper;

use Ibexa\Contracts\FieldTypePage\FieldType\LandingPage\Model\BlockValue;

/**
 * Fallback mapper for block types that have no dedicated mapper yet.
 * Serializes attributes as-is — useful for poc visibility, not production.
 */
final class PassthroughBlockMapper implements BlockMapperInterface
{
    public function supports(string $blockType): bool
    {
        return true;
    }

    public function mapAttributes(BlockValue $block): array
    {
        $out = [];
        foreach ($block->getAttributes() as $attr) {
            $out[$attr->getName()] = $this->normalize($attr->getValue());
        }

        return $out;
    }

    private function normalize(mixed $value): mixed
    {
        if ($value === null || is_scalar($value)) {
            return $value;
        }

        if (is_object($value) && method_exists($value, '__toString')) {
            return (string) $value;
        }

        return json_encode($value) ?: null;
    }
}
