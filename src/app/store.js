import { configureStore } from '@reduxjs/toolkit';
import amk from '../features/mailSlice';

export const store = configureStore({
  reducer: {
    mail: amk,
  },
});
