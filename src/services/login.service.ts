import bcrypt = require('bcryptjs');
import token from '../token/token';
import User from '../database/models/user';
import userService from './user.service';

const logining = async (email:string, password: string) => {
  const userResult = await User.findOne({ where: { email } });

  if (!userResult) return false;

  const verifyEmail = bcrypt.compareSync(password, userResult.getDataValue('password'));

  if (!verifyEmail) return false;

  const resultToken = token.createToken(userResult);

  const user = await userService.getUser(userResult.getDataValue('id'));

  return {
    user,
    token: resultToken,
  };
};

const validateLogin = async (tokenReq: string) => {
  const validate = await token.authToken(tokenReq);
  return validate;
};

export default { logining, validateLogin };
