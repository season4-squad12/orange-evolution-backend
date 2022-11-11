import { Router } from 'express';
import contentController from '../controllers/content.controller';

const routeContent = '/contents/:id';
const contentRoutes = Router();

contentRoutes.get(
  '/contents',
  contentController.getContentlAll,
);

contentRoutes.get(
  routeContent,
  contentController.getContent,
);

export default contentRoutes;
