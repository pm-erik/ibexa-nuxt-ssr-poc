<?php

declare(strict_types=1);

namespace App\Mapper;

use DOMDocument;
use Ibexa\Bundle\FieldTypeRichText\Templating\Twig\Extension\RichTextConverterExtension;
use Ibexa\Contracts\FieldTypePage\FieldType\LandingPage\Model\BlockValue;

final class IbexaRichtextBlockMapper implements BlockMapperInterface
{
    public function __construct(private readonly RichTextConverterExtension $richTextConverter)
    {
    }

    public function supports(string $blockType): bool
    {
        return $blockType === 'richtext';
    }

    public function mapAttributes(BlockValue $block): array
    {
        $contentAttr = $block->getAttribute('content');
        $doc = $contentAttr ? $this->coerceToDomDocument($contentAttr->getValue()) : null;

        return [
            'html' => $doc !== null ? $this->richTextConverter->richTextToHtml5($doc) : '',
        ];
    }

    private function coerceToDomDocument(mixed $value): ?DOMDocument
    {
        if ($value instanceof DOMDocument) {
            return $value;
        }

        if (is_string($value) && $value !== '') {
            $doc = new DOMDocument();
            if (@$doc->loadXML($value)) {
                return $doc;
            }
        }

        return null;
    }
}