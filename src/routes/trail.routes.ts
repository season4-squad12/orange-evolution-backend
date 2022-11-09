import { Router } from 'express';
import trailController from '../controllers/trail.controller';

const trailRoutes = Router();

trailRoutes.get(
  '/trails',
  trailController.getTrailAll,
);

trailRoutes.get(
  '/trails/:id',
  trailController.getTrail,
);

trailRoutes.delete(
  '/trails/:id',
  trailController.deleteTrail,
);

export default trailRoutes;
