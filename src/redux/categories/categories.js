import { configureStore } from '@reduxjs/toolkit';

const categories = (state = [], action) => {
  switch (action.type) {
    case 'Under construction':
      return false;

    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: 'Under construction',
});

export const store = configureStore(categories);

export default categories;
