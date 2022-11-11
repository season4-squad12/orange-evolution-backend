import { Request, Response } from 'express';
import loginService from '../services/login.service';

const logining = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await loginService.logining(email, password);
  if (!result) return res.status(401).json({ message: 'Incorrect email or password' });

  res.status(200).json(result);
};

const validateLogin = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Not authorized' });
  const result = await loginService.validateLogin(authorization);

  if (!result) return res.status(401).json({ message: 'No authorization!' });

  res.status(201).json(result);
};

export default { logining, validateLogin };
