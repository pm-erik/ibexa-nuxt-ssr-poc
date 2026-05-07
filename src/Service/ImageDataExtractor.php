<?php

declare(strict_types=1);

namespace App\Service;

use Ibexa\Bundle\FieldTypeRichText\Templating\Twig\Extension\RichTextConverterExtension;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Core\FieldType\Image\Value as ImageValue;
use Ibexa\FieldTypeRichText\FieldType\RichText\Value as RichTextValue;
use Throwable;

/**
 * Extracts {url, alt, caption} for content of type "image".
 * Reads the standard "image" + "caption" fields. Tolerant of missing fields.
 */
final class ImageDataExtractor implements TypedDataExtractorInterface
{
    public function __construct(private readonly RichTextConverterExtension $richTextConverter)
    {
    }

    public function supports(string $contentTypeIdentifier): bool
    {
        return $contentTypeIdentifier === 'image';
    }

    public function extract(Content $content): ?array
    {
        try {
            $imageValue = $content->getFieldValue('image');
            $url = $imageValue instanceof ImageValue ? ($imageValue->uri ?: null) : null;
            $alt = $imageValue instanceof ImageValue ? ($imageValue->alternativeText ?: null) : null;

            $caption = null;
            $captionValue = $content->getFieldValue('caption');
            if ($captionValue instanceof RichTextValue) {
                $html = $this->richTextConverter->richTextToHtml5($captionValue->xml);
                $caption = trim(strip_tags($html)) ?: null;
            }

            return ['url' => $url, 'alt' => $alt, 'caption' => $caption];
        } catch (Throwable) {
            return null;
        }
    }
}
