import { Request, Response, NextFunction } from 'express';
import token from '../token';

const verifyTokenAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Not authorized' });
  const result = await token.authToken(authorization);

  if (!result) return res.status(401).json({ message: 'Token invalid' });

  if (result.user.role !== 'admin') {
    return res.status(401)
      .json({ message: 'Permission for administrators only' });
  }

  next();
};

export default verifyTokenAdmin;
