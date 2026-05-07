<?php

declare(strict_types=1);

namespace App\Service;

use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Core\FieldType\BinaryFile\Value as BinaryFileValue;
use Throwable;

/**
 * Extracts {url, fileName, fileSize, mimeType} for content of type "file".
 * Reads the standard "file" field. Tolerant of missing values.
 */
final class FileDataExtractor implements TypedDataExtractorInterface
{
    public function supports(string $contentTypeIdentifier): bool
    {
        return $contentTypeIdentifier === 'file';
    }

    public function extract(Content $content): ?array
    {
        try {
            $fileValue = $content->getFieldValue('file');
            if (!$fileValue instanceof BinaryFileValue) {
                return null;
            }

            return [
                'url' => $fileValue->uri ?: null,
                'fileName' => $fileValue->fileName ?: null,
                'fileSize' => $fileValue->fileSize ?: null,
                'mimeType' => $fileValue->mimeType ?: null,
            ];
        } catch (Throwable) {
            return null;
        }
    }
}
