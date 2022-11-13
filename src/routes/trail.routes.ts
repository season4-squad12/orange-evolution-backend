import { Router } from 'express';
import verifyToken from '../middleware/verifyToken';
import trailController from '../controllers/trail.controller';
import verifyTokenAdmin from '../middleware/verifyTokenAdmin';

const routeTrailId = '/trails/:id';
const trailRoutes = Router();

trailRoutes.get(
  '/trails',
  verifyToken,
  trailController.getTrailAll,
);

trailRoutes.get(
  '/trailshome',
  trailController.getTrailAllHome,
);

trailRoutes.get(
  routeTrailId,
  verifyToken,
  trailController.getTrail,
);

trailRoutes.delete(
  routeTrailId,
  verifyTokenAdmin,
  trailController.deleteTrail,
);

trailRoutes.put(
  routeTrailId,
  verifyTokenAdmin,
  trailController.updateTrail,
);

trailRoutes.post(
  '/trails',
  verifyTokenAdmin,
  trailController.createTrail,
);

trailRoutes.get(
  '/user-trails/:id',
  trailController.getTrailUser,
);

export default trailRoutes;
