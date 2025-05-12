import { configureStore } from '@reduxjs/toolkit';
import someReducer from './someSlice';

export const store = configureStore({
  reducer: {
    some: someReducer,
  },
});
export default store;