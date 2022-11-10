import { Request, Response } from 'express';
import subtrailService from '../services/subtrail.service';

// controle get de todas subtrilhas
const getSubtrailAll = async (_req: Request, res: Response) => {
  const subtrails = await subtrailService.getSubtrailAll();
  res.status(201).json(subtrails);
};

const getSubtrail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const subtrail = await subtrailService.getSubtrail(Number(id));
  if (!subtrail) res.status(404).json({ error: 'Subtrail not found' });
  res.status(201).json(subtrail);
};

const createSubtrail = async (req: Request, res: Response) => {
  const trail = await subtrailService.createSubtrail(req.body);
  res.status(201).json(trail);
};

export default { getSubtrailAll, getSubtrail, createSubtrail };
