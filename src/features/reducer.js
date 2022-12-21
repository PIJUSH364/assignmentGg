const allReducer = {
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
};
export default allReducer;
