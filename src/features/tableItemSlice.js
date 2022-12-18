import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startIndex: 0,
  tableItemsList: [
    'date',
    'app_id',
    'clicks',
    'impressions',
    'requests',
    'responses',
    'revenue',
  ],
  applyItems: [],
  finalItems: [],
};

const tableItemSlice = createSlice({
  name: 'tableItem',
  initialState,
  reducers: {
    setStartIndex: (state, action) => {
      state.startIndex = action.payload;
    },
    updateListItem: (state, action) => {
      state.tableItemsList = action.payload;
    },

    handleApplyItems: (state, action) => {
      state.applyItems = action.payload;
    },
    handleFinalItems: (state, action) => {
      state.finalItems = action.payload;
    },
  },
});

export default tableItemSlice.reducer;
export const {
  setStartIndex,
  updateListItem,
  handleApplyItems,
  handleFinalItems,
} = tableItemSlice.actions;
