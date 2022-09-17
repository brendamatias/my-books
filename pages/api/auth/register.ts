import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import connectDB from '@/config/connectDB';
import * as Yup from 'yup';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method !== 'POST') return res.status(405).send({ message: `Method ${method} not allowed` });

  const { name, email, password } = req.body;

  const schema = Yup.object({
    name: Yup.string().required('Enter a name'),
    email: Yup.string().email().required('Enter an email'),
    password: Yup.string().required('Enter a password').min(6),
  });

  try {
    await schema.validate({ name, email, password });
    await connectDB();

    let user = await User.findOne({ email });

    if (!user) {
      const passwordHash = await bcrypt.hash(password, 8);

      user = await User.create({ email, name, password: passwordHash });
    } else {
      return res.status(400).json({ message: 'User already exist' });
    }

    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(500).json({ message: err?.errors[0] || 'Oops, internal error' });
  }
}
