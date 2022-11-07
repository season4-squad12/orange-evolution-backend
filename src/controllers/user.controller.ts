import { Request, Response } from 'express';
import userService from '../services/user.service';

enum ResponseHTTP {
  errorServer = 'Internal Server Error',
}

const getAllusers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getUserAll();
    res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.getUser(Number(id));
    return user
      ? res.status(201).json(user)
      : res.status(404).json({ error: 'User not found' });
  } catch (error) {
    return res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

const createUser = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const newUser = await userService.createUser(body);
    res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

export default { getAllusers, getUser, createUser };
