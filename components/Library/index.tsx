import { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Book, BookStatus, GoogleApiBooksResponseData } from '@/types';
import BookList from '@/components/BookList';
import BookService from '@/services/book.service';
import ErrorList from '@/config/errors';
import Image from 'next/image';
import { Container } from './styles';

const BOOK_API = 'https://www.googleapis.com/books/v1/volumes?q=';

type LibraryProps = {
  books: Book[];
};

const Library = ({ books }: LibraryProps) => {
  const [currentBooks, setCurrentBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');
  const [foundBooks, setFoundBooks] = useState<GoogleApiBooksResponseData[]>([]);

  const createBook = async (book: GoogleApiBooksResponseData) => {
    try {
      const body = {
        book_id: book.id,
        author: book.volumeInfo?.authors?.[0],
        title: book.volumeInfo?.title,
        description: book.volumeInfo?.description,
        page_count: book.volumeInfo?.pageCount || 0,
        image: book.volumeInfo?.imageLinks?.thumbnail,
      };

      const response = await BookService.createBook(body);

      setSearchTerm('');
      toast.success('Book added successfully');
      setCurrentBooks([...currentBooks, response.data]);
    } catch (err: any) {
      toast.error(err.message || ErrorList.INTERNAL_SERVER_ERROR);
    }
  };

  const getBooks = async () => {
    if (!searchTerm) return setFoundBooks([]);
    const searchTermFormatted = searchTerm.replace(/ /g, '+');

    const { data } = await axios.get(BOOK_API + searchTermFormatted);

    return setFoundBooks(data.items);
  };

  const handleUpdate = async (id: string, type: BookStatus) => {
    try {
      const currentType = type === 'unread' ? 'read' : 'wishlist';
      const { data } = await BookService.updateBook(id, currentType);
      const index = currentBooks.findIndex((item) => item._id === id);
      const booksFormatted = [...currentBooks];
      booksFormatted.splice(index, 1);

      toast.success('Book updated successfully');
      setCurrentBooks([...booksFormatted, data]);
    } catch (err: any) {
      toast.error(err.message || ErrorList.INTERNAL_SERVER_ERROR);
    }
  };

  const handleDelete = async (id: string, bookTitle: string) => {
    const result = window.confirm(
      `Tem certeza que deseja excluir o livro ${bookTitle}? Essa ação não pode ser desfeita!`
    );

    if (result) {
      try {
        await BookService.deleteBook(id);

        const index = currentBooks.findIndex((item) => item._id === id);
        const booksFormatted = [...currentBooks];
        booksFormatted.splice(index, 1);

        setCurrentBooks(booksFormatted);
        toast.success('Book deleted successfully');
      } catch (err: any) {
        toast.error(err.message || ErrorList.INTERNAL_SERVER_ERROR);
      }
    }
  };

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <Container>
      <h1>Library 📖</h1>
      <div className="search-container">
        <div className="search-input">
          <input placeholder="Add new book..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <MdSearch />
        </div>

        <div className="search-dropdown">
          <ul>
            {foundBooks &&
              foundBooks.map((book) => (
                <li key={book.id}>
                  <button type="button" onClick={() => createBook(book)}>
                    <Image
                      src={book.volumeInfo?.imageLinks?.thumbnail || ''}
                      alt={book.volumeInfo.title}
                      width={30}
                      height={45}
                    />
                    {book.volumeInfo?.title}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="content">
        <div>
          <BookList
            title="Não Lidos"
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            books={currentBooks.filter((book) => book.status === 'unread')}
            type="unread"
          />
        </div>
        <div>
          <BookList
            title="Quero comprar"
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            books={currentBooks.filter((book) => book.status === 'wishlist')}
            type="wishlist"
          />
        </div>
        <div>
          <BookList
            title="Lidos"
            type="read"
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            books={currentBooks.filter((book) => book.status === 'read')}
            withDescription
          />
        </div>
      </div>
    </Container>
  );
};

export default Library;
