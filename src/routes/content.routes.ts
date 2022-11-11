import { Router } from 'express';
import contentController from '../controllers/content.controller';

const routeContentId = '/contents/:id';
const contentRoutes = Router();

contentRoutes.get(
  '/contents',
  contentController.getContentlAll,
);

contentRoutes.get(
  routeContentId,
  contentController.getContent,
);

contentRoutes.post(
  routeContentId,
  contentController.createContent,
);

contentRoutes.delete(
  routeContentId,
  contentController.deleteContent,
);

export default contentRoutes;
