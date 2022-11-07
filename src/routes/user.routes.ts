import { Router } from 'express';
import controller from '../controllers/user.controller';

const userRoutes = Router();
const routeUser = '/users/:id';

userRoutes.get(
  routeUser,
  controller.getAllusers,
);

userRoutes.get(
  routeUser,
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
  routeUser,
  controller.updateUser,
);

userRoutes.delete(
  routeUser,
  controller.deleteUser,
);

export default userRoutes;
