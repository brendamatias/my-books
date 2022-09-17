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

async function createBook(data: BookRequestData): Promise<CreateOrUpdateBookResponseData> {
  return fetchJson('/api/books', 'POST', data);
}

async function updateBook(bookId: string, status: BookStatus): Promise<CreateOrUpdateBookResponseData> {
  return fetchJson(`/api/books/${bookId}`, 'PATCH', { status });
}

async function deleteBook(bookId: string): Promise<void> {
  return fetchJson(`/api/books/${bookId}`, 'DELETE');
}

const BookService = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};

export default BookService;
