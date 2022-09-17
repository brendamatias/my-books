import Sidebar from '@/components/Sidebar';
import SidebarSecondary from '@/components/SidebarSecondary';
import { Container } from './styles';

const DefaultLayout = ({ page, setPage, children }: any) => (
  <Container>
    <Sidebar page={page} setPage={setPage} />

    <div className="container">{children}</div>
    <SidebarSecondary wishListCount={10} readCount={10} readBooks={10} />
  </Container>
);

export default DefaultLayout;
