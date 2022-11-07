import { Request, Response } from 'express';
import userService from '../services/user.service';

enum ResponseHTTP {
  errorServer = 'Internal Server Error',
}

interface QueryRole extends Request {
  query: {
    role: string,
  }
}

const getAllusers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getUserAll();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: ResponseHTTP.errorServer });
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
    res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

const getUserRole = async (req: QueryRole, res: Response) => {
  const { role } = req.params;
  try {
    const users = await userService.getUserRole(role);
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

const createUser = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const newUser = await userService.createUser(body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const upUser = await userService.updateUser(body, Number(id));
    if (upUser) res.status(201).json({ sucess: 'user updated successfully' });
  } catch (error) {
    res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

export default { getAllusers, getUser, createUser, getUserRole, updateUser };
