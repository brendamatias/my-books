export type BookStatus = 'read' | 'unread' | 'wishlist';

export type Book = {
  _id: string;
  book_id: string;
  title: string;
  image?: string;
  description?: string;
  author?: string;
  page_count: number;
  user: string;
  status: BookStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type BookRequestData = {
  book_id: string;
  title: string;
  image?: string;
  description?: string;
  author?: string;
  page_count: number;
  status?: BookStatus;
};

export type ListBookResponseData = {
  data: Book[];
};

export type CreateOrUpdateBookResponseData = {
  data: Book;
};

export type GoogleApiBooksResponseData = {
  id: string;
  volumeInfo: {
    title: string;
    description?: string;
    pageCount?: number;
    authors: string[];
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
  };
};
