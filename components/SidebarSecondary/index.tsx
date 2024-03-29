import { AuthContext } from '@/contexts/AuthContext';
import { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { ImTrophy } from 'react-icons/im';
import { MdBookmark, MdMenuBook } from 'react-icons/md';
import { Container } from './styles';

const SidebarSecondary = () => {
  const { user } = useContext(AuthContext);

  const [pagesRead] = useState(0);
  const [authors] = useState([]);

  return (
    <Container>
      <div className="avatar" />
      <strong>{user?.name}</strong>
      <span>{user?.email}</span>

      <div className="pages-read">
        <ImTrophy />
        <strong>
          {pagesRead}+<br />
          Páginas Lidas
        </strong>
      </div>

      <div className="info">
        <div>
          <div className="icon">
            <MdBookmark />
          </div>
          <div>
            <strong>Wishlist</strong>
            <span>0 books</span>
          </div>
        </div>

        <div>
          <div className="icon">
            <MdMenuBook />
          </div>
          <div>
            <strong>Read</strong>
            <span>0 books</span>
          </div>
        </div>
      </div>

      <div className="authours-read">
        <strong>Authors Read</strong>

        <ul>
          {Object.keys(authors).map((item: any) => (
            <li key={item}>
              <div className="icon">
                <FaUser />
              </div>
              <div>
                <strong>{item}</strong>
                <span>
                  {authors[item]} book {authors[item] > 1 && 's'} read
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SidebarSecondary;
