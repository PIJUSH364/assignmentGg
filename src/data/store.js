import { configureStore } from '@reduxjs/toolkit';
import tableItemReducer from '../features/tableItemSlice';

const store = configureStore({
  reducer: {
    tableItem: tableItemReducer,
  },
});
export default store;
