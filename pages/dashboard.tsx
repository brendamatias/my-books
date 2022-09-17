import { AuthContext } from '@/contexts/AuthContext';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import { parseCookies } from 'nookies';

const Dashboard: NextPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Hello World</h1>
        <h1>{user?.name}</h1>
      </main>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'my-books.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
