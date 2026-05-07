<?php

declare(strict_types=1);

namespace App\EventSubscriber;

use Ibexa\FieldTypePage\FieldType\Page\Block\Renderer\BlockRenderEvents;
use Ibexa\FieldTypePage\FieldType\Page\Block\Renderer\Event\PreRenderEvent;
use Ibexa\FieldTypePage\FieldType\Page\Block\Renderer\Twig\TwigRenderRequest;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Adds the BlockValue itself to the twig render parameters as `_block_value`,
 * so per-block templates can compute a BlockDto inline via app_block_dto().
 *
 * Stock ibexa exposes individual fields (`block_id`, `block_class`, attributes)
 * but not the BlockValue object — needed to run our block mapper from twig.
 */
final class ExposeBlockValueSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            BlockRenderEvents::GLOBAL_BLOCK_RENDER_PRE => 'onPreRender',
        ];
    }

    public function onPreRender(PreRenderEvent $event): void
    {
        $request = $event->getRenderRequest();
        if (!$request instanceof TwigRenderRequest) {
            return;
        }

        $params = $request->getParameters();
        $params['_block_value'] = $event->getBlockValue();
        $request->setParameters($params);
    }
}
