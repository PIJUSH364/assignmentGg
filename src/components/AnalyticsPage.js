import React from 'react';
import './analyticsPage.css';
import { TableComponent } from './TableComponent';
import { TableMain } from './TableMain';
export const AnalyticsPage = ({ data }) => {
  return (
    <div className="analytics_container">
      <h2 className="page_title">Analytics</h2>
      <div className="analytics_header common_border">
        <input type="datetime-local"></input>
        <TableComponent title="setting" />
      </div>
      <div className="analytics_dimension common_border">
        <div>
          <TableComponent title="Date" />
          <TableComponent title="Apps" />
          <TableComponent title="Clicks" />
        </div>
        <button>close</button>
        <button>Apply Changes</button>
      </div>
      <div>
        <TableMain data={data} />
      </div>
    </div>
  );
};
