import { configureStore } from '@reduxjs/toolkit';
import isClosedSlice from './isClosed';

const store = configureStore({
  reducer: isClosedSlice,
});

export default store;
