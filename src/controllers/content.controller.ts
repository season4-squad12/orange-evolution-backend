import { Request, Response } from 'express';
import contentService from '../services/content.service';

const getContentlAll = async (_req: Request, res: Response) => {
  const contents = await contentService.getContentAll();
  res.status(201).json(contents);
};

const getContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const content = await contentService.getContent(Number(id));
  if (!content) res.status(404).json({ error: 'Content not found' });
  res.status(201).json(content);
};

export default { getContentlAll, getContent };
