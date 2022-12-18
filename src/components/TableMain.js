import React from 'react';
import './tableMain.css';


export const TableMain = ({ tableCellData, finalItems }) => {
  return (
    <>
      {tableCellData ? (
        <>
          {/* if nothing select items then user did't see any table data */}
          {finalItems.length === 0 ? (
            <div className="error_msg_container">
              <h2>Hey something's off!</h2>
              <h2> we could't display the given data</h2>
            </div>
          ) : (
            <table>
              <thead>
                {/* table heading row */}
                <tr>
                  {finalItems.map((item, key) => (
                    <th key={key}>
                      <div className="table_header_column">
                        <i className="fa-solid fa-filter" />
                        {item.toUpperCase()}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* list of table body row */}
                {tableCellData.map((rowData, key) => (
                  <tr key={key}>
                    {finalItems.map((item, key) => {
                      return <td key={key}>{rowData[item]}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      ) : null}
    </>
  );
};
