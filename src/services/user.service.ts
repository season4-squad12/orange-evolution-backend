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

// retorna todos os usuários salvos no banco de dados
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

// busca no banco de dados um usuário específico
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

// busca um usuário pela sua role: 'admin' ou 'student'
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

// Função responsável por criar um relacionamento de usuário com a trila
const createAssociateUserTrail = async (idUser: number, trails: number[]) => {
  trails.map(async (idTrail) => {
    const exists = await UserTrail.findOne({ where: { idUser, idTrail } });
    // caso não exista esse relacionamento na tabela pivô, aqui será criada
    if (!exists) {
      await UserTrail.create({ idUser, idTrail });
    }
  });
};

// função responsável criar um usuário e também é possivel passar ids de trilhas e fazer o relacionamento de uma só vez
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

  // se o array com ids de trilhas for maior que zero, será salvo o relacionamento na tabela de pivô
  if (trails.length > 0) {
    trails.map(async (idTrail) => {
      await UserTrail.create({ idUser, idTrail });
    });
  }

  return newUser;
};

/* função responsável por atualizar um usuário, não atualiza os relacionamento do usuário e as trilhas,
 * haverá um endpoit especialmente para essa finalidade
 */
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

// função responsável por deletar um usuário específico
const deleteUser = async (id: number) => {
  const upUser = await User.destroy({ where: { id } });
  return upUser;
};

export default {
  getUserAll, getUser, createUser, getUserRole, updateUser, deleteUser, createAssociateUserTrail };
