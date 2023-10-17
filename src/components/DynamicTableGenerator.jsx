// DynamicTableGenerator.js

import React, { useEffect, useState } from 'react';

export default function DynamicTableGenerator({ tableKey }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch table data based on the tableKey (replace with your own data source)
    fetch(`/table-data/${tableKey}.json`)
      .then((response) => response.json())
      .then((result) => setTableData(result));
  }, [tableKey]);

  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>WIRE</th>
            <th>DESTINATION</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
