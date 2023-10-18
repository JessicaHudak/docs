// HardwareReqsTable.js

import React, { useState, useEffect } from 'react';

export default function HardwareReqsTable({ hardwareKey }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch table data based on the hardwareKey
    fetch(`/hardware-data/${hardwareKey}.json`)
      .then((response) => response.json())
      .then((result) => setTableData(result));
  }, [hardwareKey]);

  return (
    <div className="hardware-reqs-table">
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{row.column3}</td>
              <td>{row.column4}</td>
              <td>{row.column5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
