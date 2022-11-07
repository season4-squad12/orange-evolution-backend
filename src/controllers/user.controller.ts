import { Request, Response } from 'express';
import userService from '../services/user.service';

const getAllusers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getUserAll();
    res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
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
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default { getAllusers, getUser };
