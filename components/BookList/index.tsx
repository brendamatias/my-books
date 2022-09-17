import { Book, BookStatus } from '@/types';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Container, ScrollVertical } from './styles';

type BookListProps = {
  title: string;
  books: Book[];
  type: BookStatus;
  handleUpdate?: (book_id: string, type: BookStatus) => Promise<void> | void;
  handleDelete?: (book_id: string, title: string) => void;
  withDescription?: boolean;
};

const BookList = ({
  title,
  books,
  type,
  handleUpdate = () => {},
  handleDelete = () => {},
  withDescription = false,
}: BookListProps) => (
  <Container>
    <strong>{title}</strong>

    {!withDescription ? (
      <ScrollVertical type={type}>
        {books.map((book) => (
          <li key={book._id}>
            <button type="button" onClick={() => handleUpdate(book._id, type)} className="image-button">
              <Image src={book.image || ''} alt={book.title} layout="fill" />
            </button>
            <strong>{book.title}</strong>

            <span>{book.author}</span>

            <button type="button" className="remove-button" onClick={() => handleDelete(book._id, book.title)}>
              <MdClose />
            </button>
          </li>
        ))}
      </ScrollVertical>
    ) : (
      <ul className="book-list">
        {books.map((book) => (
          <li key={book._id}>
            <div className="image">
              <Image src={book.image || ''} alt={book.title} height={192} width={128} />
            </div>

            <div className="content">
              <strong>{book.title}</strong>
              <span>{book.author}</span>

              <div className="rating">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item}>
                    <FaStar />
                  </div>
                ))}
              </div>

              <p>{book.description}</p>
            </div>
          </li>
        ))}
      </ul>
    )}
  </Container>
);

export default BookList;
