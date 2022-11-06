require('dotenv').config();
import jwt from 'jsonwebtoken';
import modelUser from '../database/models/user';

const createToken = (user) => {
    const secret = process.env.SECRET_KEY;
    const token = jwt.sign({data: user}, secret, { expiresIn: '7d', algorithm: 'HS256'});
    return token;
};

const authToken = async (token) => {
    const secret = process.env.SECRET_KEY;
    try {
        const decodec = jwt.verify(token, secret);
        const user = await modelUser.findAll({where: { email: decodec.data.email}})
        if (!user) return false;

        return {
            auth: true,
            user: decodec.data.user,
        }
    } catch (e) {
        return false;
    }
};

export default { createToken, authToken };