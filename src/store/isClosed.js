import { createSlice } from '@reduxjs/toolkit';

const initCount = {
  isClosed: false,
};

const isClosedSlice = createSlice({
  name: 'isClosed',
  initialState: initCount,
  reducers: {
    true(state) {
      state.isClosed = true;
    },
    false(state) {
      state.isClosed = false;
    },
  },
});

export default isClosedSlice.reducer;
export const isClosedAction = isClosedSlice.actions;
