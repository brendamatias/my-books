import { Container } from './styles';

const AuthLayout = ({ children }: any) => (
  <Container>
    <div className="content">{children}</div>
  </Container>
);

export default AuthLayout;
