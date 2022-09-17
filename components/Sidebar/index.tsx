import { AuthContext } from '@/contexts/AuthContext';
import { useContext, useState, Dispatch, SetStateAction } from 'react';
import { FaHome, FaThLarge, FaSignOutAlt } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { MdBook } from 'react-icons/md';

import { Container, SidebarWrapper } from './styles';

type Page = 'home' | 'my-books' | 'recommendations';

type SidebarProps = {
  page: Page;
  setPage: Dispatch<SetStateAction<Page>>;
};

type Link = {
  id: Page;
  label: string;
  icon: any;
};

const Sidebar = ({ page, setPage }: SidebarProps) => {
  const [theme] = useState('dark');
  const { signOut } = useContext(AuthContext);

  const links: Link[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <FaHome />,
    },
    {
      id: 'my-books',
      label: 'Library',
      icon: <ImBooks />,
    },
    {
      id: 'recommendations',
      label: 'Recommendations',
      icon: <FaThLarge />,
    },
  ];

  return (
    <Container>
      <div>
        <div>
          <a className="logo" href="#teste">
            <MdBook /> mybooks
          </a>

          <SidebarWrapper>
            <div className="sidebar-title">MENU</div>

            <ul>
              {links.map((link) => (
                <li key={link.id} className={`${link.id === page && 'active'}`}>
                  <button type="button" onClick={() => setPage(link.id)}>
                    <div className="icon">{link.icon}</div>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </SidebarWrapper>
        </div>
      </div>

      <div className="footer">
        <div>
          <button type="button" onClick={() => signOut()}>
            <div className="icon">
              <FaSignOutAlt />
            </div>
            Logout
          </button>
        </div>

        <div className="dark-mode">
          <button type="button">
            <div className="icon">{theme === 'dark' ? <IoMdSunny /> : <IoMdMoon />}</div>
            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
