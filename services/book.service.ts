import { fetchJson } from '@/helpers/fetcher';
import { BookRequestData, ListBookResponseData, BookStatus, CreateOrUpdateBookResponseData } from '@/types';
import { server } from '@/config/server';

async function getBooks(token: string, status?: BookStatus): Promise<ListBookResponseData> {
  let url = `${server}/api/books`;
  if (status) url += `?status=${status}`;

  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const data = await response.json();

  return data;
}

async function createBook(data: BookRequestData, token: string): Promise<CreateOrUpdateBookResponseData> {
  return fetchJson('/api/books', 'POST', data, token);
}

async function updateBook(bookId: string, status: BookStatus, token: string): Promise<CreateOrUpdateBookResponseData> {
  return fetchJson(`/api/books/${bookId}`, 'PATCH', { status }, token);
}

async function deleteBook(bookId: string, token: string): Promise<void> {
  return fetchJson(`/api/books/${bookId}`, 'DELETE', null, token);
}

const BookService = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};

export default BookService;
