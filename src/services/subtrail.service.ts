import trailSubtrail from '../database/models/trailSubtrail';
import subtrail from '../database/models/subtrail';
import content from '../database/models/content';

interface IBody {
  name: string,
  description: string,
  idTrail: number
}

const getSubtrailAll = async (): Promise<subtrail[]> => {
  const subtrails = await subtrail.findAll({
    attributes: {
      exclude: ['createAt', 'updateAt'],
    },
    include: [
      {
        model: content,
        as: 'conteudos',
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
        as: 'conteudos',
        through: { attributes: [] },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  });
  return subtrailResult as subtrail;
};

const createAssociateTrailSubtrail = async (idTrail: number, idSubtrail: number) => {
  const exists = await trailSubtrail.findOne({ where: { idTrail, idSubtrail } });
  if (!exists) {
    await trailSubtrail.create({ idTrail, idSubtrail });
  }
};

const createSubtrail = async (body: IBody) => {
  const { name, description, idTrail } = body;
  const subtrailResult = await subtrail.create({
    name,
    description,
  });

  const idSubtrail = subtrailResult.getDataValue('id');

  if (subtrailResult) {
    await trailSubtrail.create({ idTrail, idSubtrail });
  }

  return subtrailResult;
};

const deleteSubtrail = async (id: number) => {
  const subtrailResult = await subtrail.findOne({ where: { id } });
  if (!subtrailResult) return false;
  const delSubtrail = await subtrail.destroy({
    where: { id },
  });
  return delSubtrail;
};

const updateSubtrail = async (id: number, body: IBody) => {
  const { name, description } = body;
  const upSubtrail = await subtrail.update({
    name,
    description,
  }, {
    where: { id },
  });
  return upSubtrail;
};

export default {
  getSubtrailAll,
  getSubtrail,
  createSubtrail,
  deleteSubtrail,
  updateSubtrail,
  createAssociateTrailSubtrail,
};
