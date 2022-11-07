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

userRoutes.post(
  '/users',
  controller.createUser,
);

userRoutes.get(
  '/usersrole/:role',
  controller.getUserRole,
);

export default userRoutes;
