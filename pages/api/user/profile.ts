import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import authConfig from '@/config/auth';
import connectDB from '@/config/connectDB';
import { promisify } from 'util';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== 'GET') return res.status(405).send({ message: `Method ${method} not allowed` });

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided.' });
  }

  try {
    await connectDB();
    const [, token] = authHeader.split(' ');
    // @ts-ignore
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // @ts-ignore
    const user = await User.findOne({ id: decoded.id });

    if (!user) return res.status(404).json({ message: 'Token invalid' });

    return res.status(200).json({ user, token });
  } catch (err: any) {
    return res.status(404).json({ message: 'Token invalid' });
  }
}
