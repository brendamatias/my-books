import { MdMail, MdLock } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import AuthService from '@/services/auth.service';
import { SignUpRequestData } from '@/types';
import Router from 'next/router';
import { toast } from 'react-toastify';
import ErrorList from '@/config/errors';
import Input from '../Input';

const SignUp = () => {
  const { register, handleSubmit } = useForm<SignUpRequestData>();

  const onSubmit = async (data: SignUpRequestData) => {
    try {
      await AuthService.signUpRequest(data);
      Router.push('/');
      toast.success('User created successfully');
    } catch (err: any) {
      toast.error(err.message || ErrorList.INTERNAL_SERVER_ERROR);
    }
  };

  return (
    <div className="content">
      <h1>Sign Up</h1>
      <h3>Create your account</h3>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input
          label="Name"
          name="name"
          placeholder="How would you like to be called?"
          icon={<FaUserAlt />}
          register={register}
        />
        <Input
          label="Email"
          name="email"
          placeholder="Choose your best email"
          icon={<MdMail />}
          register={register}
          type="email"
          required
        />
        <Input
          label="Password"
          name="password"
          placeholder="Enter a strong password"
          icon={<MdLock />}
          register={register}
          type="password"
          required
        />

        <div className="links">
          <a href="#teste">Do you have an account?</a>
        </div>

        <button type="submit">Create account</button>
      </form>
    </div>
  );
};

export default SignUp;
