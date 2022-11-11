import { Router } from 'express';
import loginController from '../controllers/login.controller';

const loginRoutes = Router();

loginRoutes.post(
  '/login',
  loginController.logining,
);

loginRoutes.get(
  '/login/validate',
  loginController.validateLogin,
);

export default loginRoutes;
