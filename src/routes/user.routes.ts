import { Router } from 'express';
import controller from '../controllers/user.controller';

const userRoutes = Router();

userRoutes.get(
  '/users',
  controller,
);

export default userRoutes;
