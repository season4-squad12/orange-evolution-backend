import { Request, Response } from 'express';
import trailService from '../services/trail.service';

const getTrailAll = async (_req:Request, res:Response) => {
  try {
    const trails = await trailService.getTrailAll();
    res.status(201).json(trails);
  } catch (error) {
    res.status(500).json({ error: 'internal server error' });
  }
};

const getTrail = async (req:Request, res:Response) => {
  const { id } = req.params;
  const trail = await trailService.getTrail(Number(id));
  if (!trail) res.status(404).json({ error: 'Trail not found' });
  res.status(201).json(trail);
};

const deleteTrail = async (req:Request, res:Response) => {
  const { id } = req.params;
  const trail = await trailService.deleteTrail(Number(id));
  if (trail) res.status(201).json({ success: 'Trail deleted successfully' });
  res.status(404).json({ error: 'Trail not found' });
};

export default { getTrailAll, getTrail, deleteTrail };
