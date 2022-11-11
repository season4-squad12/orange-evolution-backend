import content from '../database/models/content';

const getContentAll = async (): Promise<content[]> => {
  const contents = await content.findAll({
    attributes: {
      exclude: ['createAt', 'updateAt'],
    },
    include: [
      {
        model: content,
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

export default { getContentAll, getContent };
