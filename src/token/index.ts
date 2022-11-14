import jwt = require('jsonwebtoken');
import User from '../database/models/user';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

interface IData {
  data: {
    id: string,
    name: string,
    lastName: string,
    email: string,
    role: string,
  }
}

export const createToken = (user: User) => {
  const secret = process.env.SECRET_KEY;
  if (secret) {
    const token = jwt.sign({ data: user }, secret, { expiresIn: '7d', algorithm: 'HS256' });
    return token;
  }
};

export const authToken = async (token: string) => {
  const secret = process.env.SECRET_KEY;
  try {
    if (secret) {
      const decodec = jwt.verify(token, secret) as IData;
      const user = await User.findOne({
        where: { email: decodec.data.email },
        attributes: { exclude: ['password'] },
      });
      if (!user) return false;
      return {
        auth: true,
        user: decodec.data,
      };
    }
  } catch (e) {
    return false;
  }
};
