import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import authConfig from '@/config/auth';
import connectDB from '@/config/connectDB';
import { promisify } from 'util';
import Book from '@/models/Book';
import * as Yup from 'yup';

const updateStatus = async (req: NextApiRequest, res: NextApiResponse, userId: string) => {
  try {
    const id = req.query?.id?.[0];
    if (!id || `${id}` === 'undefined') return res.status(404).json({ message: 'Id is required' });

    const { status } = req.body;

    const schema = Yup.object({
      status: Yup.string().required('Status is required'),
    });

    await schema.validate({ status });

    const book = await Book.findOne({ _id: id, user: userId });

    if (!book) return res.status(404).json({ message: 'Book not found' });

    book.status = status;
    await book.save();

    return res.status(200).json({ data: book });
  } catch (err: any) {
    return res.status(500).json({ message: (err?.errors && err?.errors[0]) || 'Oops, internal error' });
  }
};

const destroy = async (req: NextApiRequest, res: NextApiResponse, userId: string) => {
  try {
    const id = req.query?.id?.[0];
    if (!id || `${id}` === 'undefined') return res.status(404).json({ message: 'Id is required' });

    const book = await Book.findOne({ _id: id, user: userId });
    if (!book) return res.status(404).json({ message: 'Book not found' });

    await book.remove();

    return res.status(204).json(null);
  } catch (err: any) {
    return res.status(500).json({ message: (err?.errors && err?.errors[0]) || 'Oops, internal error' });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token not provided.' });

  await connectDB();
  const [, token] = authHeader.split(' ');

  const decoded = await promisify(jwt.verify)(token, authConfig.secret);
  const user = await User.findOne({ id: decoded.id });

  if (!user) return res.status(404).json({ message: 'Token invalid' });

  if (method === 'PATCH') return updateStatus(req, res, user.id);
  if (method === 'DELETE') return destroy(req, res, user.id);

  return res.status(405).send({ message: `Method ${method} not allowed` });
}
