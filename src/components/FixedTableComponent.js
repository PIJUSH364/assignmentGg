import React from 'react';

export const FixedTableComponent = ({ title }) => {
  return (
    <>
      {' '}
      <li className={`dimensions_component border_left_Success`}>
        {/* // onDrop={() => handleDragDrop()} */}
        <div
          className="draggable"
          // draggable="true"
          // onDragStart={() => handleDragStart(index)}
        >
          <p className="table-item">{title}</p>
        </div>
      </li>
    </>
  );
};
