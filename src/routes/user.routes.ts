import { Router } from 'express';
import controller from '../controllers/user.controller';

const userRoutes = Router();

userRoutes.get(
  '/users',
  controller.getAllusers,
);

userRoutes.get(
  '/users/:id',
  controller.getUser,
);

export default userRoutes;
