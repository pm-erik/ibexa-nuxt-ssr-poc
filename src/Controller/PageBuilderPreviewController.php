<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\PageRepositoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Dev-only standalone preview of the editor bundle in page-data mode.
 * The production editor render path is ibexa's page-builder iframe (twig
 * overrides + marker-mode bundle); this route exists for local iteration
 * without logging into admin and is 404'd in non-dev environments.
 */
#[Route('/_preview', name: 'app_preview_')]
final class PageBuilderPreviewController extends AbstractController
{
    public function __construct(
        private readonly PageRepositoryInterface $pages,
        private readonly string $kernelEnvironment,
    ) {
    }

    #[Route('/pages/{locationId}', name: 'page', methods: ['GET'], requirements: ['locationId' => '\d+'])]
    public function preview(int $locationId): Response
    {
        if ($this->kernelEnvironment !== 'dev') {
            throw new NotFoundHttpException();
        }

        $page = $this->pages->findByLocationId($locationId);
        if ($page === null) {
            throw new NotFoundHttpException(sprintf('No page builder content at location %d', $locationId));
        }

        return $this->render('page_builder/preview.html.twig', [
            'page' => $page,
        ]);
    }
}
