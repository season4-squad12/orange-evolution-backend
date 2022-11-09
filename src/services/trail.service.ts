import subtrails from '../database/models/subtrails';
import trail from '../database/models/trail';

const getTrailAll = async (): Promise <trail[]> => {
  const trails = await trail.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [
      {
        model: subtrails,
        as: 'subtrilhas',
        through: { attributes: [] },
      },
    ],
  });
  return trails as trail[];
};

export default { getTrailAll };
