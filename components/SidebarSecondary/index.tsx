import { AuthContext } from '@/contexts/AuthContext';
import { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { ImTrophy } from 'react-icons/im';
import { MdBookmark, MdMenuBook } from 'react-icons/md';
import { Container } from './styles';

type SidebarSecondaryProps = {
  wishListCount: number;
  readCount: number;
  readBooks: number;
};

const SidebarSecondary = ({ wishListCount, readCount, readBooks }: SidebarSecondaryProps) => {
  const { user } = useContext(AuthContext);

  const [pagesRead] = useState(0);
  const [authors] = useState([]);
  // const [user, setUser] = React.useState({});

  // React.useEffect(() => {
  //   let pageReadsCount = 0;
  //   const authorsArray = [];

  //   readBooks.forEach((book) => {
  //     pageReadsCount += book.page_count || 0;
  //     authorsArray[book.author] = (authorsArray[book.author] || 0) + 1;
  //   });

  //   setPageReads(pageReadsCount);
  //   setAuthors(authorsArray);
  // }, [readBooks]);

  // React.useEffect(() => {
  //   const currentUser = localStorage.getItem('my-books');

  //   setUser(JSON.parse(currentUser));
  // }, []);

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
            <span>{wishListCount} books</span>
          </div>
        </div>

        <div>
          <div className="icon">
            <MdMenuBook />
          </div>
          <div>
            <strong>Read</strong>
            <span>{readCount} books</span>
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
