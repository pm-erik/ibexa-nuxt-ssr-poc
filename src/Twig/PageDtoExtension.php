<?php

declare(strict_types=1);

namespace App\Twig;

use App\Dto\BlockDto;
use App\Dto\PageDto;
use App\Mapper\IbexaPageMapper;
use Ibexa\Contracts\Core\Repository\Exceptions\NotFoundException;
use Ibexa\Contracts\Core\Repository\Exceptions\UnauthorizedException;
use Ibexa\Contracts\Core\Repository\LocationService;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Contracts\FieldTypePage\FieldType\LandingPage\Model\BlockValue;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

final class PageDtoExtension extends AbstractExtension
{
    /**
     * Flags to make json safe to embed inside `<script type="application/json">…</script>`
     * (and incidentally inside html attributes too). Combined with twig's `'is_safe' => ['html']`
     * on the filter, no `|raw` is needed at the call site.
     */
    private const JSON_FLAGS_FOR_SCRIPT_TAG =
        JSON_HEX_TAG               // `<` / `>` → `<` / `>` — prevents `</script>` injection.
        | JSON_HEX_AMP             // `&`       → `&`            — defense against html entity decoding.
        | JSON_HEX_APOS            // `'`       → `'`            — safe in single-quoted attribute context.
        | JSON_HEX_QUOT            // `"`       → `"`            — safe in double-quoted attribute context.
        | JSON_UNESCAPED_SLASHES   // keeps `/` literal               — cosmetic, smaller output for urls.
        | JSON_THROW_ON_ERROR;     // throw `\JsonException` on failure — a malformed dto should be loud, not silently `null`.

    public function __construct(
        private readonly LocationService $locationService,
        private readonly IbexaPageMapper $mapper,
    ) {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('app_page_dto', [$this, 'pageDto']),
            new TwigFunction('app_block_dto', [$this, 'blockDto']),
        ];
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('app_json_for_script', [$this, 'jsonForScript'], ['is_safe' => ['html']]),
        ];
    }

    public function jsonForScript(mixed $value): string
    {
        return json_encode($value, self::JSON_FLAGS_FOR_SCRIPT_TAG);
    }

    public function pageDto(Content $content): ?PageDto
    {
        $locationId = $content->contentInfo->mainLocationId;
        if ($locationId === null) {
            return null;
        }

        try {
            $location = $this->locationService->loadLocation($locationId);
        } catch (NotFoundException | UnauthorizedException) {
            // missing or unreadable location → no page-data; editor mounts nothing.
            return null;
        }

        return $this->mapper->map($location, $content);
    }

    public function blockDto(BlockValue $block): BlockDto
    {
        return $this->mapper->mapStandaloneBlock($block);
    }
}
