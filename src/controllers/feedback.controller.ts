import { Request, Response } from 'express';
import feedback from '../services/feedback.services';

const getTrailAll = async (_req: Request, res: Response) => {
  /* try { */
  const feedbackResult = await feedback.getAllFeedback();
  res.status(201).json(feedbackResult);
  /* } catch (error) {
    res.status(500).json({ error: 'internal server error' });
  } */
};

const createFeedback = async (req: Request, res: Response) => {
  try {
    const createFeedBackResult = await feedback.createFeedBack(req.body);
    res.status(201).json(createFeedBackResult);
  } catch (error) {
    res.status(500).json({ error: 'internal server error' });
  }
};

export default { getTrailAll, createFeedback };
