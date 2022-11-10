import { genSalt, hash } from 'bcryptjs';
import Trail from '../database/models/trail';
import User from '../database/models/user';
import UserTrail from '../database/models/userTrail';

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
      exclude: ['password', 'createdAt', 'updatedAt'],
    },
    include: [
      {
        model: Trail,
        as: 'trilhas',
        through: { attributes: [] },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  });
  return users as User[];
};

const getUser = async (id: number): Promise <User> => {
  const user = await User.findOne({
    where: { id },
    attributes: {
      exclude: ['password'],
    },
    include: [
      {
        model: Trail,
        as: 'trilhas',
        through: { attributes: [] },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  });
  return user as User;
};

const getUserRole = async (role: string): Promise <User[]> => {
  const users = await User.findAll({
    where: { role },
    attributes: {
      exclude: ['password'],
    },
    include: [
      {
        model: Trail,
        as: 'trilhas',
        through: { attributes: [] },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    ],
  });
  return users as User[];
};

const createAssociateUserTrail = async (idUser: number, trails: number[]) => {
  trails.map(async (idTrail) => {
    const exists = await UserTrail.findOne({
      where: {
        $or: [{ idUser }, { idTrail }],
      },
    });
    console.log(exists);
    if (!exists) {
      await UserTrail.create({ idUser, idTrail });
    }
  });
};

const createUser = async (trails: number[], body: IBody): Promise <User> => {
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

  const idUser = newUser.getDataValue('id');

  trails.map(async (idTrail) => {
    await UserTrail.create({ idUser, idTrail });
  });

  return newUser;
};

const updateUser = async (body: IBody, id: number) => {
  const { name, lastName, email, role } = body;
  const upUser = await User.update({
    name,
    lastName,
    email,
    role,
  }, { where: { id } });
  return upUser;
};

const deleteUser = async (id: number) => {
  const upUser = await User.destroy({ where: { id } });
  return upUser;
};

export default {
  getUserAll, getUser, createUser, getUserRole, updateUser, deleteUser, createAssociateUserTrail };
