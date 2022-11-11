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

const createContent = async (req: Request, res: Response) => {
  const content = await contentService.createContent(req.body);
  res.status(201).json(content);
};
const deleteContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const content = await contentService.deleteContent(Number(id));
  if (content) res.status(201).json({ success: 'Content deleted successfully' });
  res.status(404).json({ error: 'Trail not found' });
};

const updateContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const upContent = await contentService.updateContent(Number(id), body);
  if (upContent) res.status(201).json({ success: 'Content update successfully' });
};

export default { getContentlAll, getContent, createContent, deleteContent, updateContent };
