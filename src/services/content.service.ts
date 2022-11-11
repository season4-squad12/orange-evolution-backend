import content from '../database/models/content';

interface IBody {
  name: string,
  description: string,
}

const getContentAll = async (): Promise<content[]> => {
  const contents = await content.findAll({
    attributes: {
      exclude: ['createAt', 'updateAt'],
    },
    include: [
      {
        model: content, // dúvida
        as: 'conteúdos',
        through: { attributes: [] },
        attributes: {
          exclude: ['createAt', 'updateAt'],
        },
      },
    ],
  });
  return contents as content[];
};

const getContent = async (id: number): Promise<content> => {
  const contentResult = await content.findOne({
    where: { id },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [
      {
        model: content,
        as: 'conteúdos',
        through: { attributes: [] },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  });
  return contentResult as content;
};

const createContent = async (body: IBody) => {
  const { name, description } = body;
  const contentResult = await content.create({
    name,
    description,
  });
  return contentResult;
};

const deleteContent = async (id: number) => {
  const contentResult = await content.findOne({ where: { id } });
  if (!contentResult) return false;
  const delContent = await content.destroy({
    where: { id },
  });
  return delContent;
};

const updateContent = async (id: number, body: IBody) => {
  const { name, description } = body;
  const upContent = await content.update({
    name,
    description,
  }, {
    where: { id },
  });
  return upContent;
};

export default { getContentAll, getContent, createContent, deleteContent, updateContent };