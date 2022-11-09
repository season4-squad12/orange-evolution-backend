import subtrails from '../database/models/subtrail';
import trail from '../database/models/trail';

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

const deleteTrail = async (id: number) => {
  const trailResult = await trail.findOne({ where: { id } });
  if (!trailResult) return false;
  const delTrail = await trail.destroy({
    where: { id },
  });
  return delTrail;
};

export default { getTrailAll, getTrail, deleteTrail };
