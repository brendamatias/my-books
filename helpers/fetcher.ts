import { parseCookies } from 'nookies';

export async function fetchJson(url: string, method: 'GET' | 'POST' | 'PATCH' | 'DELETE', body?: any) {
  const headers: any = {
    'Content-Type': 'application/json',
  };

  const { 'my-books.token': token } = parseCookies();

  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  if (response.status !== 204) {
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data;
  }

  return null;
}
