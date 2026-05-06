<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\PageRepositoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/_preview', name: 'app_preview_')]
final class PageBuilderPreviewController extends AbstractController
{
    public function __construct(private readonly PageRepositoryInterface $pages)
    {
    }

    #[Route('/pages/{locationId}', name: 'page', methods: ['GET'], requirements: ['locationId' => '\d+'])]
    public function preview(int $locationId): Response
    {
        $page = $this->pages->findByLocationId($locationId);
        if ($page === null) {
            throw new NotFoundHttpException(sprintf('No page builder content at location %d', $locationId));
        }

        return $this->render('page_builder/preview.html.twig', [
            'page' => $page,
        ]);
    }
}
