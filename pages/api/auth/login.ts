import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authConfig from '@/config/auth';
import connectDB from '@/config/connectDB';
import * as Yup from 'yup';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== 'POST') return res.status(405).send({ message: `Method ${method} not allowed` });

  try {
    const { email, password } = req.body;
    const schema = Yup.object({
      email: Yup.string().email().required('Enter an email'),
      password: Yup.string().required('Enter a password').min(6, 'Password must be at least 6 characters'),
    });

    await schema.validate({ email, password });
    await connectDB();

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Password incorrect' });
    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.status(200).json({ user, token });
  } catch (err: any) {
    return res.status(500).json({ message: err?.errors[0] || 'Oops, internal error' });
  }
}
