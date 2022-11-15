import { Router } from 'express';
import feedbackController from '../controllers/feedback.controller';

const feedbackRoutes = Router();

feedbackRoutes.get(
  '/feedbacks',
  feedbackController.getTrailAll,
);

feedbackRoutes.post(
  '/feedbacks',
  feedbackController.createFeedback,
);

export default feedbackRoutes;
