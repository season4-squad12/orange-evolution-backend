import { genSalt, hash } from 'bcryptjs';
import User from '../database/models/user';

interface IBody {
  name: string,
  lastName: string,
  email: string,
  password: string,
  role: string,
}

const getUserAll = async (): Promise <User[]> => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });
  return users as User[];
};

const getUser = async (id: number): Promise <User> => {
  const user = await User.findOne({
    where: { id },
    attributes: {
      exclude: ['password'],
    },
  });
  return user as User;
};

const getUserRole = async (role: string): Promise <User[]> => {
  const users = await User.findAll({
    where: { role },
    attributes: {
      exclude: ['password'],
    },
  });
  return users as User[];
};

const createUser = async (body: IBody) => {
  const { name, lastName, email, password, role } = body;

  const salt = await genSalt(10);
  const newPassword = await hash(password, salt);

  const newUser = await User.create({
    name,
    lastName,
    email,
    password: newPassword,
    role,
  });

  return newUser;
};

export default { getUserAll, getUser, createUser, getUserRole };
