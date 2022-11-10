import { Router } from 'express';
import subtrailController from '../controllers/subtrail.controller';

const subtrailRoutes = Router();

subtrailRoutes.get(
  '/subtrails',
  subtrailController.getSubtrailAll,
);

subtrailRoutes.get(
  '/subtrails/:id',
  subtrailController.getSubtrail,
);

export default subtrailRoutes;
