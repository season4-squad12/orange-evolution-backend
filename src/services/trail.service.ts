import subtrails from '../database/models/subtrail';
import trail from '../database/models/trail';
import userService from './user.service';

interface IBody {
  name: string,
  description: string,
  question: string,
  response: string,
  icone: string,
  color: string
}

const getTrailAll = async (): Promise<trail[]> => {
  const trails = await trail.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [
      {
        model: subtrails,
        as: 'subtrilhas',
        through: { attributes: [] },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  });
  return trails as trail[];
};

const getTrailAllHome = async (): Promise<trail[]> => {
  const trails = await trail.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return trails as trail[];
};

// eslint-disable-next-line max-lines-per-function
const getTrail = async (id: number): Promise<trail> => {
  const trailResult = await trail.findOne({
    where: { id },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [
      {
        model: subtrails,
        as: 'subtrilhas',
        through: { attributes: [] },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  });
  return trailResult as trail;
};

const createTrail = async (body: IBody) => {
  const { name, description } = body;
  const trailResult = await trail.create({
    name,
    description,
  });
  return trailResult;
};

const deleteTrail = async (id: number) => {
  const trailResult = await trail.findOne({ where: { id } });
  if (!trailResult) return false;
  const delTrail = await trail.destroy({
    where: { id },
  });
  return delTrail;
};

const updateTrail = async (id: number, body: IBody) => {
  const { name, description } = body;
  const upTrail = await trail.update({
    name,
    description,
  }, {
    where: { id },
  });
  return upTrail;
};

const getTrailAndSubtrail = async (idTrails: number[]): Promise <trail[]> => {
  const trails = await Promise.all(idTrails.map((ids: number) => getTrail(ids)));
  return trails as trail[];
};

const getTrailUserAll = async (id:number) => {
  const user = await userService.getUser(id);
  const trilhas = user.getDataValue('trilhas');

  const idTrails = trilhas.map((trilha: { id: number; }) => trilha.id);

  const trails = await getTrailAndSubtrail(idTrails);
  return trails;
};

export default { getTrailAll,
  getTrail,
  createTrail,
  deleteTrail,
  updateTrail,
  getTrailAllHome,
  getTrailUserAll };
