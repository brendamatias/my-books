import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import authConfig from '@/config/auth';
import connectDB from '@/config/connectDB';
import { promisify } from 'util';
import Book from '@/models/Book';
import * as Yup from 'yup';
import { BookStatus } from '@/types';

type GetQuery = {
  status?: BookStatus;
  user: string;
};

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const authHeader = req.headers.authorization;

  try {
    await connectDB();
    const [, token] = authHeader.split(' ');

    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    const user = await User.findOne({ id: decoded.id });

    if (!user) return res.status(404).json({ message: 'Token invalid' });

    const query: GetQuery = { user: user.id };
    const { status } = req.query;

    if (status) query.status = status;

    const books = await Book.find(query);

    return res.status(200).json({ data: books });
  } catch (err: any) {
    return res.status(500).json({ message: (err?.errors && err?.errors[0]) || 'Oops, internal error' });
  }
};

const store = async (req: NextApiRequest, res: NextApiResponse) => {
  const authHeader = req.headers.authorization;

  try {
    await connectDB();
    const [, token] = authHeader.split(' ');

    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    const user = await User.findOne({ id: decoded.id });

    if (!user) return res.status(404).json({ message: 'Token invalid' });

    const { book_id, title, author, description, image, page_count } = req.body;

    const schema = Yup.object({
      book_id: Yup.string().required('Book id is required'),
      title: Yup.string().required('Title is required'),
      author: Yup.string(),
      description: Yup.string(),
      image: Yup.string(),
      page_count: Yup.number().required('Page count is required').min(0),
    });

    await schema.validate({ book_id, title, author, description, image, page_count });

    let book = await Book.findOne({ book_id, user: user.id });

    if (book) {
      return res.status(400).json({ message: 'Book already exist' });
    }

    book = await Book.create({ book_id, title, author, description, image, page_count, user: user.id });

    return res.status(200).json({ data: book });
  } catch (err: any) {
    return res.status(500).json({ message: (err?.errors && err?.errors[0]) || 'Oops, internal error' });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token not provided.' });

  if (method === 'GET') return get(req, res);
  if (method === 'POST') return store(req, res);

  return res.status(405).send({ message: `Method ${method} not allowed` });
}
