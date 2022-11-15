import Feedback from '../database/models/feedback';

interface IBody {
  idUser: number,
  message: string,
  trail: string,
  subtrail: string,
  content: string,
}

const getAllFeedback = async (): Promise<Feedback[]> => {
  const feedbackResult = await Feedback.findAll();
  return feedbackResult as Feedback[];
};

const createFeedBack = async (body: IBody) => {
  const { idUser, message, trail, subtrail, content } = body;
  const newFeedback = await Feedback.create({
    idUser,
    message,
    trail,
    subtrail,
    content,
  });

  return newFeedback;
};

export default { getAllFeedback, createFeedBack };
