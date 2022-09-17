import { AuthContext } from '@/contexts/AuthContext';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useContext, useState } from 'react';
import { parseCookies } from 'nookies';
import Sidebar from '@/components/Sidebar';

type Page = 'home' | 'my-books' | 'recommendations';

const Dashboard: NextPage = () => {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState<Page>('home');

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Sidebar page={page} setPage={setPage} />
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
