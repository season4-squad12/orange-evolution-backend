import { Router } from 'express';
import trailController from '../controllers/trail.controller';

const trailRoutes = Router();

trailRoutes.get(
  '/trails',
  trailController.getTrailAll,
);

export default trailRoutes;
