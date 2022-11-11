import content from '../database/models/content';

interface IBody {
  title: string,
  description: string,
  type: string,
  author: string,
  duration: string,
  status: string,
  link: string,
  idUser: number,
  experience: number,
}

const getContentAll = async (): Promise<content[]> => {
  const contents = await content.findAll({
    attributes: {
      exclude: ['createAt', 'updateAt'],
    },
  });
  return contents as content[];
};

const getContent = async (id: number): Promise<content> => {
  const contentResult = await content.findOne({
    where: { id },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return contentResult as content;
};

const createContent = async (body: IBody): Promise<content> => {
  const { title, description, type, author, duration, status, link, idUser, experience } = body;
  const contentResult = await content.create({
    title,
    description,
    type,
    author,
    duration,
    status,
    link,
    idUser,
    experience,
  });
  return contentResult as content;
};

const deleteContent = async (id: number): Promise<false | number> => {
  const contentResult = await content.findOne({ where: { id } });
  if (!contentResult) return false;
  const delContent = await content.destroy({
    where: { id },
  });
  return delContent;
};

const updateContent = async (id: number, body: IBody) => {
  const { title, description, type, author, duration, status, link, idUser, experience } = body;
  const upContent = await content.update({
    title,
    description,
    type,
    author,
    duration,
    status,
    link,
    idUser,
    experience,
  }, {
    where: { id },
  });
  return upContent;
};

export default { getContentAll, getContent, createContent, deleteContent, updateContent };
