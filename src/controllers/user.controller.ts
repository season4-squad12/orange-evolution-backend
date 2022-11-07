import { Request, Response } from 'express';
import userService from '../services/user.service';

const getAllusers = async (_req: Request, res: Response) => {
  const users = await userService();
  res.status(201).json(users);
};

export default getAllusers;
