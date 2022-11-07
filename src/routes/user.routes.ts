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

userRoutes.get(
  '/usersrole/:role',
  controller.getUserRole,
);

userRoutes.post(
  '/users',
  controller.createUser,
);

userRoutes.put(
  '/users/:id',
  controller.updateUser,
);

export default userRoutes;
