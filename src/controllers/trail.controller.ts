import { Request, Response } from 'express';
import trailService from '../services/trail.service';

const getTrailAll = async (_req:Request, res:Response) => {
  const trails = await trailService.getTrailAll();
  res.status(201).json(trails);
};

export default { getTrailAll };
