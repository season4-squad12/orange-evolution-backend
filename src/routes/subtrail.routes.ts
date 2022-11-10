import { Router } from 'express';
import subtrailController from '../controllers/subtrail.controller';

const routeSubtrailId = '/subtrails/:id';
const subtrailRoutes = Router();

subtrailRoutes.get(
  '/subtrails',
  subtrailController.getSubtrailAll,
);

subtrailRoutes.get(
  routeSubtrailId,
  subtrailController.getSubtrail,
);

subtrailRoutes.post(
  routeSubtrailId,
  subtrailController.createSubtrail,
);

export default subtrailRoutes;
