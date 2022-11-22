import { configureStore } from '@reduxjs/toolkit'

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const books = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return action.book;

    case REMOVE_BOOK:
      return action.book;

    default:
      return state;
  }
};

export const addBook = () => {
    return {
  type: ADD_BOOK,
}};

export const removeBook = () => {
    return {
  type: REMOVE_BOOK,
}};

export const store = Redux.createStore(books);

export default books;