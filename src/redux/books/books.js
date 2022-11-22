import { configureStore } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const books = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          added: true,
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state,
        {
          added: false,
        },
      ];
    default:
      return state;
  }
};

export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});

export const store = configureStore(books);

export default books;
