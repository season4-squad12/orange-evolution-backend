import { Router } from 'express';
import contentController from '../controllers/content.controller';

const routeContentId = '/contents/:id';
const contentRoutes = Router();

contentRoutes.get(
  '/contents',
  contentController.getContentAll,
);

contentRoutes.get(
  routeContentId,
  contentController.getContent,
);

contentRoutes.post(
  '/contents',
  contentController.createContent,
);

contentRoutes.delete(
  routeContentId,
  contentController.deleteContent,
);

contentRoutes.put(
  routeContentId,
  contentController.updateContent,
);

export default contentRoutes;
