import React, { useState } from 'react';
import './analyticsPage.css';
import { TableComponent } from './TableComponent';
import { TableMain } from './TableMain';
import { useDispatch, useSelector } from 'react-redux';
import { resourceData } from './resourceData';
import { handleFinalItems } from '../features/tableItemSlice';

export const AnalyticsPage = () => {
  const dispatch = useDispatch();
  const [updatedTableItemsList, setUpdatedTableItemsList] = useState([]);
  const [shown, setShown] = useState(false);

  // updated table items
  const applyItems = useSelector((state) => state.tableItem.applyItems);

  //final item list
  const finalItems = useSelector((state) => state.tableItem.finalItems);

  //  shown all table column Items
  const originalTableItems = useSelector(
    (state) => state.tableItem.tableItemsList
  );

  // final item list sorted ordered design
  const indexValue = applyItems
    .map((item) => originalTableItems.indexOf(item))
    .sort();

  // table header items reArrange
  const handleArrangeTable = () => {
    let temp = [];
    dispatch(handleFinalItems(temp));
    for (const element of indexValue) {
      temp = [...temp, originalTableItems[element]];
    }
    // final tableItems assign 
    dispatch(handleFinalItems(temp));
    setUpdatedTableItemsList([...applyItems]);
  };

  return (
    <div className="analytics_container">
      <h2 className="page_title">Analytics</h2>
      <div className="analytics_header common_border">
        <input type="date"></input>
        <button onClick={() => setShown(!shown)}>Setting</button>
      </div>
      <div
        className="analytics_dimension common_border"
        style={{ display: `${shown ? 'block' : 'none'}` }}>
        {/* list of tableItems shown */}
        <ul className="dimensions_container">
          {originalTableItems.map((title, index) => (
            <TableComponent title={title} index={index} key={index} />
          ))}
        </ul>
        <button onClick={() => setShown(!shown)}>close</button>
        <button onClick={handleArrangeTable}>Apply Changes</button>
      </div>
      <div>
        {/* table cell data */}
        <TableMain tableCellData={resourceData} finalItems={finalItems} />
      </div>
    </div>
  );
};
