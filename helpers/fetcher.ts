import { parseCookies } from 'nookies';

const { 'my-books.token': token } = parseCookies();

export async function fetchJson(url: string, method: 'GET' | 'POST', body?: any) {
  const headers: any = {
    'Content-Type': 'application/json',
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message);

  return data;
}
