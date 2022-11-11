import { Router } from 'express';
import verifyToken from '../middleware/verifyToken';
import verifyTokenAdmin from '../middleware/verifyTokenAdmin';
import controller from '../controllers/user.controller';

const userRoutes = Router();
const routeUser = '/users/:id';

userRoutes.get(
  '/users',
  verifyTokenAdmin,
  controller.getAllusers,
);

userRoutes.get(
  routeUser,
  verifyToken,
  controller.getUser,
);

userRoutes.get(
  '/usersrole/:role',
  verifyTokenAdmin,
  controller.getUserRole,
);

userRoutes.post(
  '/usertrails',
  verifyToken,
  controller.createAssociateUserTrail,
);

userRoutes.post(
  '/users',
  controller.createUser,
);

userRoutes.put(
  routeUser,
  verifyToken,
  controller.updateUser,
);

userRoutes.delete(
  routeUser,
  verifyTokenAdmin,
  controller.deleteUser,
);

export default userRoutes;
