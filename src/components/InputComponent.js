import React, { useEffect, useState } from 'react';
import moment from 'moment';

import './analyticsPage.css';

export const InputComponent = ({ setDateObj }) => {
  const [fromDate, setFromDate] = useState(moment().format('YYYY-MM-DD'));
  const [toDate, setToDate] = useState(moment().format('YYYY-MM-DD'));

  useEffect(() => {
    setDateObj({ startDate: fromDate, endDate: toDate });
  }, [fromDate, toDate, setDateObj]);

  return (
    <>
      <div className="datePickerContainer">
        <div className="datePickerComponent">
          <label htmlFor="fromDate">FromDate</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) =>
              setFromDate(moment(new Date(e.target.value)).format('YYYY-MM-DD'))
            }
            className="analytics_header_date_picker fromDate"
          />
        </div>
        <div className="datePickerComponent">
          <label htmlFor="toDate">ToDate</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) =>
              setToDate(moment(new Date(e.target.value)).format('YYYY-MM-DD'))
            }
            className="analytics_header_date_picker toDate"
          />
        </div>
      </div>
    </>
  );
};
