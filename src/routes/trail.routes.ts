import { Router } from 'express';
import trailController from '../controllers/trail.controller';

const routeTrailId = '/trails/:id';
const trailRoutes = Router();

trailRoutes.get(
  '/trails',
  trailController.getTrailAll,
);

trailRoutes.get(
  routeTrailId,
  trailController.getTrail,
);

trailRoutes.delete(
  routeTrailId,
  trailController.deleteTrail,
);

trailRoutes.put(
  routeTrailId,
  trailController.updateTrail,
);

trailRoutes.post(
  '/trails',
  trailController.createTrail,
);

export default trailRoutes;
