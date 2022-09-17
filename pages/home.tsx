import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import BookService from '@/services/book.service';
import { Book } from '@/types';
import HomeComponent from '@/components/Home';

type HomeProps = {
  books: Book[];
};

const Home = ({ books }: HomeProps) => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <main>
      <HomeComponent unreadBooks={books} />
    </main>
  </>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'my-books.token': token } = parseCookies(ctx);

  const { data } = await BookService.getBooks(token, 'unread');

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
