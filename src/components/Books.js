import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import AddNewBook from './AddNewBook';

const Books = () => {
  const books = useSelector((state) => state.book);
  return (
    <>
      <BookList books={books} />
      <AddNewBook />
    </>
  );
};

export default Books;
