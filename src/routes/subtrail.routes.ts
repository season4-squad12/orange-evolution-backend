import { Router } from 'express';
import verifyToken from '../middleware/verifyToken';
import subtrailController from '../controllers/subtrail.controller';
import verifyTokenAdmin from '../middleware/verifyTokenAdmin';

const routeSubtrailId = '/subtrails/:id';
const subtrailRoutes = Router();

subtrailRoutes.get(
  '/subtrails',
  verifyToken,
  subtrailController.getSubtrailAll,
);

subtrailRoutes.get(
  routeSubtrailId,
  verifyToken,
  subtrailController.getSubtrail,
);

subtrailRoutes.post(
  routeSubtrailId,
  verifyTokenAdmin,
  subtrailController.createSubtrail,
);

subtrailRoutes.delete(
  routeSubtrailId,
  verifyTokenAdmin,
  subtrailController.deleteSubtrail,
);

subtrailRoutes.put(
  routeSubtrailId,
  verifyTokenAdmin,
  subtrailController.updateSubtrail,
);

export default subtrailRoutes;
