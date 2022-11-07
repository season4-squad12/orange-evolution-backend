import User from '../database/models/user';

const getUserAll = async (): Promise <User[]> => {
  const users = await User.findAll();
  return users as User[];
};

const getUser = async (id: number): Promise <User> => {
  const user = await User.findOne({ where: { id } });
  return user as User;
};

export default { getUserAll, getUser };
