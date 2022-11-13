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

const createAssociateUserTrail = async (req: Request, res: Response) => {
  const { idUser, trails } = req.body;
  try {
    const test = await userService.createAssociateUserTrail(idUser, trails);
    res.status(201).json({ success: 'Associates created with successfully' });
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

const createUser = async (req: Request, res: Response) => {
  const { trails, ...data } = req.body;
  const newUser = await userService.createUser(trails, data);
  res.status(201).json(newUser);
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const upUser = await userService.updateUser(body, Number(id));
    if (upUser) res.status(201).json({ success: 'user updated successfully' });
  } catch (error) {
    res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const delUser = await userService.deleteUser(Number(id));
    if (delUser) res.status(201).json({ success: 'user deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: ResponseHTTP.errorServer });
  }
};

export default {
  getAllusers, getUser, createUser, getUserRole, updateUser, deleteUser, createAssociateUserTrail };
