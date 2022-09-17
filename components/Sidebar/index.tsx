import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { FaHome, FaThLarge, FaSignOutAlt } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { MdBook } from 'react-icons/md';
import { AuthContext } from '@/contexts/AuthContext';
import { Container, SidebarWrapper } from './styles';

type Page = '/home' | '/library' | '/recommendations';

type ILink = {
  id: Page;
  label: string;
  icon: any;
};

const Sidebar = () => {
  const [theme] = useState('dark');
  const { signOut } = useContext(AuthContext);
  const { route } = useRouter();

  const links: ILink[] = [
    {
      id: '/home',
      label: 'Home',
      icon: <FaHome />,
    },
    {
      id: '/library',
      label: 'Library',
      icon: <ImBooks />,
    },
    {
      id: '/recommendations',
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
                <li key={link.id} className={`${route.includes(link.id) && 'active'}`}>
                  <Link href={link.id}>
                    <div className="link">
                      <div className="icon">{link.icon}</div>
                      {link.label}
                    </div>
                  </Link>
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
