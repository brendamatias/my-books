import BookList from '@/components/BookList';
import { AuthContext } from '@/contexts/AuthContext';
import { Book } from '@/types';
import { useContext } from 'react';
import { Container } from './styles';

type HomeProps = {
  unreadBooks?: Book[];
};

const Home = ({ unreadBooks = [] }: HomeProps) => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <div className="banner">
        <h1>Hi {user?.name}!</h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s.
        </p>

        <button type="button">Browser Latest</button>
      </div>

      <BookList title="Não Lidos" type="unread" books={unreadBooks} />
    </Container>
  );
};

export default Home;
