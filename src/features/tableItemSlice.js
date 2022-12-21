import { createSlice } from '@reduxjs/toolkit';

// initial state and all reducer import from different file
import initialState from './initialState';
import allReducer from './reducer';

const tableItemSlice = createSlice({
  name: 'tableItem',
  initialState,
  reducers: allReducer,
});

export default tableItemSlice.reducer;
export const {
  setStartIndex,
  updateListItem,
  handleApplyItems,
  handleFinalItems,
} = tableItemSlice.actions;
