import { MdMail, MdLock } from 'react-icons/md';

import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import Link from 'next/link';
import Input from '../Input';
import Spinner from '../Spinner';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, loading } = useContext(AuthContext);

  const onSubmit = async (data: any) => {
    signIn(data);
  };

  return (
    <div className="content">
      <h1>Welcome Back</h1>
      <h3>Please, login to your account</h3>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input
          label="Email"
          name="email"
          placeholder="Enter your email"
          icon={<MdMail />}
          register={register}
          type="email"
          required
        />
        <Input
          label="Password"
          name="password"
          placeholder="Enter your password"
          icon={<MdLock />}
          register={register}
          type="password"
          required
        />

        <div className="links">
          <a href="#teste">Forgot password?</a>
          <Link href="/signup">Dont have account?</Link>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? <Spinner /> : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
