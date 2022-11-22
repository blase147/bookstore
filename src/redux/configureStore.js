import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categories from './categories/categories';
import books from './books/books';

export const store = combineReducers({
  book: books,
  category: categories,
});

export const root = configureStore(store);
