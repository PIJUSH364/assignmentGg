import React from 'react';
import './tableMain.css';
export const TableMain = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Apps</th>
                <th>Clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14th july</td>
                <td>google pay</td> <td>{data.clicks}</td>
              </tr>
              <tr>
                <td>15th july</td>
                <td>phone pay</td> <td>3674</td>
              </tr>
              <tr>
                {' '}
                <td>16th july</td>
                <td>what'sup</td>
                <td>9034</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : null}
    </>
  );
};
