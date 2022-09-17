import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import SignIn from '@/components/SignIn';

const Home: NextPage = () => (
  <>
    <Head>
      <title>My Books</title>
    </Head>

    <main>
      <SignIn />
    </main>
  </>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'my-books.token': token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
