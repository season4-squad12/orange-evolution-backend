import { Request, Response } from 'express';
import contentService from '../services/content.service';

const getContentAll = async (_req: Request, res: Response) => {
  const contents = await contentService.getContentAll();
  return res.status(201).json(contents);
};

const getContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const content = await contentService.getContent(Number(id));
  if (!content) return res.status(404).json({ error: 'Content not found' });
  return res.status(201).json(content);
};

const createContent = async (req: Request, res: Response) => {
  const content = await contentService.createContent(req.body);
  return res.status(201).json(content);
};
const deleteContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const content = await contentService.deleteContent(Number(id));
  if (content) return res.status(201).json({ success: 'Content deleted successfully' });
  return res.status(404).json({ error: 'Trail not found' });
};

const updateContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const upContent = await contentService.updateContent(Number(id), body);
  if (upContent) return res.status(201).json({ success: 'Content update successfully' });
};

export default { getContentAll, getContent, createContent, deleteContent, updateContent };
