import React, { useState } from 'react';
import './analyticsPage.css';
import { TableComponent } from './TableComponent';
import { TableMain } from './TableMain';
import { useDispatch, useSelector } from 'react-redux';
import { handleFinalItems } from '../features/tableItemSlice';

export const AnalyticsPage = ({ resourceData }) => {
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
      <h1 className="page_title">Analytics</h1>
      <div className="analytics_header">
        <input type="date" className="analytics_header_date_picker"></input>
        <button className="setting_button" onClick={() => setShown(!shown)}>
          <i className="fa-solid fa-sliders" />
          Settings
        </button>
      </div>
      <div
        className="analytics_dimension"
        style={{ display: `${shown ? 'block' : 'none'}` }}>
        <p className="analytics_dimension_title">Dimensions and Metrics</p>
        {/* list of tableItems shown */}
        <ul className="dimensions_container">
          {originalTableItems.map((title, index) => (
            <TableComponent title={title} index={index} key={index} />
          ))}
        </ul>
        <div className="dimensions_container_button">
          <button onClick={() => setShown(!shown)} className="close_button">
            close
          </button>
          <button className="apply_button" onClick={handleArrangeTable}>
            Apply Changes
          </button>
        </div>
      </div>
      <div>
        {/* table cell data */}
        <TableMain tableCellData={resourceData} finalItems={finalItems} />
      </div>
    </div>
  );
};
