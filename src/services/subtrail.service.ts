import subtrail from '../database/models/subtrail';
import content from '../database/models/content';

// ****Dúvida****
// Get para todas subtrails
const getSubtrailAll = async (): Promise<subtrail[]> => {
  const subtrails = await subtrail.findAll({
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
  return subtrails as subtrail[];
};

const getSubtrail = async (id: number): Promise<subtrail> => {
  const subtrailResult = await subtrail.findOne({
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
  return subtrailResult as subtrail;
};

export default { getSubtrailAll, getSubtrail };
