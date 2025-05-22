import React from 'react';
import { Select, Section } from '../styles/globalStyles';
import PropTypes from 'prop-types';

function Filters({ onChange }) {
  const months = ['01', '02', '03'];
  const years = ['2025', '2024'];

  const handleFilterChange = () => {
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    onChange({ month, year });
  };

  return (
    <Section>
    <div>
      <label>Month: </label>
      <Select id="month" defaultValue="03" onChange={handleFilterChange}>
        {months.map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </Select>
      &nbsp;&nbsp;
      <label>Year: </label>
      <Select id="year" defaultValue="2025" onChange={handleFilterChange}>
        {years.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </Select>
    </div>
    </Section>
  );
}

Filters.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Filters;