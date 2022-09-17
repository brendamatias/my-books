import Sidebar from '@/components/Sidebar';
import SidebarSecondary from '@/components/SidebarSecondary';
import { Container } from './styles';

const DefaultLayout = ({ children }: any) => (
  <Container>
    <Sidebar />

    <div className="container">{children}</div>
    <SidebarSecondary />
  </Container>
);

export default DefaultLayout;
