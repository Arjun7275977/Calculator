import React, { useState } from 'react';
import styles from './Table.module.css';

const TableGenerator = () => {
  const [number, setNumber] = useState('');

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const generateTable = () => {
    const table = [];

    for (let i = 1; i <= number; i++) {
      table.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{i * 2}</td>
          <td>{i * 3}</td>
        </tr>
      );
    }

    return table;
  };

  return (
    <div>
        <h2>Table Generator</h2>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        className={styles.input}
      />
      {number > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Number</th>
              <th>Double</th>
              <th>Triple</th>
            </tr>
          </thead>
          <tbody>{generateTable()}</tbody>
        </table>
      )}
    </div>
  );
};

export default TableGenerator;
