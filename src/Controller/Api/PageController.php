<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Dto\PageDto;
use App\Repository\PageRepositoryInterface;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/v1', name: 'app_api_v1_')]
final class PageController
{
    public function __construct(private readonly PageRepositoryInterface $pages)
    {
    }

    #[Route('/pages/{locationId}', name: 'page_show', methods: ['GET'], requirements: ['locationId' => '\d+'])]
    #[OA\Get(
        path: '/api/v1/pages/{locationId}',
        summary: 'Fetch a page builder page as a flat dto.',
        tags: ['pages'],
        parameters: [
            new OA\Parameter(
                name: 'locationId',
                in: 'path',
                required: true,
                schema: new OA\Schema(type: 'integer'),
            ),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Page found.',
                content: new OA\JsonContent(ref: new Model(type: PageDto::class)),
            ),
            new OA\Response(response: 404, description: 'No page builder content at this location.'),
        ],
    )]
    public function show(int $locationId): JsonResponse
    {
        $page = $this->pages->findByLocationId($locationId);
        if ($page === null) {
            throw new NotFoundHttpException(sprintf('No page builder content at location %d', $locationId));
        }

        return new JsonResponse($page);
    }
}
