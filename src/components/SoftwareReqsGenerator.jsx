// SoftwareReqsTable.js

import React, { useState, useEffect } from 'react';

export default function SoftwareReqsTable({ softwareKey }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch table data based on the softwareKey
    fetch(`/software-data/${softwareKey}.json`)
      .then((response) => response.json())
      .then((result) => setTableData(result));
  }, [softwareKey]);

  return (
    <div className="software-reqs-table">
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{row.column3}</td>
              <td>{row.column4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
