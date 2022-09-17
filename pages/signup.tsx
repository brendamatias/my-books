import type { NextPage } from 'next';
import Head from 'next/head';

import SignUpPage from '@/components/SignUp';

const SignUp: NextPage = () => (
  <>
    <Head>
      <title>Sign Up</title>
    </Head>

    <SignUpPage />
  </>
);

export default SignUp;
