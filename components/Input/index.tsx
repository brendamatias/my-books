import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = {
  label: string;
  name: string;
  icon: any;
  register: any;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ name, label, icon, register, ...rest }: InputProps) => (
  <Container>
    <label htmlFor={name}>{label}</label>

    <div>
      {icon}
      <input {...register(name)} name={name} {...rest} />
    </div>
  </Container>
);

export default Input;
