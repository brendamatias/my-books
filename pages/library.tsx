import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import BookService from '@/services/book.service';
import { Book } from '@/types';
import LibraryComponent from '@/components/Library';

type LibraryProps = {
  books: Book[];
};

const Library = ({ books }: LibraryProps) => (
  <>
    <Head>
      <title>Library</title>
    </Head>

    <main>
      <LibraryComponent books={books} />
    </main>
  </>
);

export default Library;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'my-books.token': token } = parseCookies(ctx);

  const { data } = await BookService.getBooks(token);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { books: data || [] },
  };
};
