/* eslint-disable no-unused-vars */
import ErrorList from '@/config/errors';
import BookService from '@/services/book.service';
import { Book, BookStatus } from '@/types';
import { FaStar } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Container, ScrollVertical } from './styles';

type BookListProps = {
  title: string;
  books: Book[];
  type: BookStatus;
  handleUpdate: (book_id: string, type: BookStatus) => void;
  handleDelete: (book_id: string, title: string) => void;
  withDescription?: boolean;
};

const BookList = ({ title, books, type, handleUpdate, handleDelete, withDescription = false }: BookListProps) => (
  <Container>
    <strong>{title}</strong>

    {!withDescription ? (
      <ScrollVertical type={type}>
        {books.map((book) => (
          <li key={book._id}>
            <button type="button" onClick={() => handleUpdate(book._id, type)} className="image-button">
              <img src={book.image} />
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
            <img src={book.image} />

            <div>
              <strong>{book.title}</strong>
              <span>{book.author}</span>

              <div className="rating">
                {[1, 2, 3, 4, 5].map((item, index) => (
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
