import { Request, Response } from 'express';
import trailService from '../services/trail.service';

const getTrailAll = async (_req: Request, res: Response) => {
  try {
    const trails = await trailService.getTrailAll();
    res.status(201).json(trails);
  } catch (error) {
    res.status(500).json({ error: 'internal server error' });
  }
};

const getTrailAllHome = async (_req: Request, res: Response) => {
  try {
    const trails = await trailService.getTrailAllHome();
    res.status(201).json(trails);
  } catch (error) {
    res.status(500).json({ error: 'internal server error' });
  }
};

const getTrail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const trail = await trailService.getTrail(Number(id));
  if (!trail) res.status(404).json({ error: 'Trail not found' });
  res.status(201).json(trail);
};

const createTrail = async (req: Request, res: Response) => {
  const trail = await trailService.createTrail(req.body);
  res.status(201).json(trail);
};

const deleteTrail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const trail = await trailService.deleteTrail(Number(id));
  if (trail) res.status(201).json({ success: 'Trail deleted successfully' });
  res.status(404).json({ error: 'Trail not found' });
};

const updateTrail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const upTrail = await trailService.updateTrail(Number(id), body);
  if (upTrail) res.status(201).json({ success: 'Trail update successfully' });
};

const getTrailUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const trail = await trailService.getTrailUser(Number(id));
  if (!trail) res.status(404).json({ error: 'Trail user not found' });
  res.status(201).json(trail);
};

export default {
  getTrailAll,
  getTrail,
  createTrail,
  deleteTrail,
  updateTrail,
  getTrailAllHome,
  getTrailUser,
};
