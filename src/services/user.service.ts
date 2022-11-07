import User from '../database/models/user';

const getUserAll = async (): Promise <User[]> => {
  const users = await User.findAll();
  return users as User[];
};

export default getUserAll;
