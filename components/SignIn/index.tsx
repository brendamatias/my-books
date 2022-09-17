import { MdMail, MdLock } from 'react-icons/md';

import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import Link from 'next/link';
import Input from '../Input';
import AuthLayout from '../_layouts/auth';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  const onSubmit = async (data: any) => {
    signIn(data);
  };

  return (
    <AuthLayout>
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

        <button type="submit">Login</button>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
