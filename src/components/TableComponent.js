import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setStartIndex,
  updateListItem,
  handleApplyItems,
} from '../features/tableItemSlice';
import {
  handleDragEnter,
  handleDragLeave,
} from './dragAndDropHandler/dndHandler';
import './tableMain.css';

export const TableComponent = ({ title, index }) => {
  const [addRemove, setAddRemove] = useState(false);
  const dispatch = useDispatch();

  const dragStartIndex = useSelector((state) => state.tableItem.startIndex);
  const applyItems = useSelector((state) => state.tableItem.applyItems);

  // original item list
  const originalTableItems = useSelector(
    (state) => state.tableItem.tableItemsList
  );

  let itemArray = [...originalTableItems];

  function handleDragStart(index) {
    const result = applyItems.find(
      (item) => item === originalTableItems[index]
    );
    if (!result) {
      return;
    }

    // set start index
    dispatch(setStartIndex(index));
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  function handleDragDrop() {
    const result = applyItems.find(
      (item) => item === originalTableItems[index]
    );
    if (!result) {
      return;
    }
    const dragEndIndex = index;
    swapItems(dragStartIndex, dragEndIndex);
  }

  handleDragEnter();
  handleDragLeave();

  // swap list_item drag and drop
  function swapItems(fromIndex, toIndex) {
    const itemOne = itemArray[fromIndex];
    const itemTwo = itemArray[toIndex];
    itemArray[toIndex] = itemOne;
    itemArray[fromIndex] = itemTwo;
    dispatch(updateListItem(itemArray));
  }

  const handleAddRemove = () => {
    if (applyItems.includes(title)) {
      const newSampleItem = applyItems.filter((e) => e !== title);
      dispatch(handleApplyItems(newSampleItem));
    } else {
      const newSampleItem = [...applyItems, title];
      dispatch(handleApplyItems(newSampleItem));
    }
    setAddRemove(!addRemove);
  };

  return (
    <li
      className={`dimensions_component ${
        addRemove ? 'border_left_Success' : ''
      }`}
      onClick={handleAddRemove}
      onDragOver={handleDragOver}
      onDrop={() => handleDragDrop()}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}>
      <div
        className="draggable"
        draggable="true"
        onDragStart={() => handleDragStart(index)}>
        <p className="table-item">{title}</p>
      </div>
    </li>
  );
};
