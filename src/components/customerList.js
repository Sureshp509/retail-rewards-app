import React from 'react';
import { Card,Select, Section } from '../styles/globalStyles';
import PropTypes from 'prop-types';

function CustomerList({ transactions, onSelect }) {
  const customers = [...new Set(transactions.map(t => t.customerId))];

  return (
    <Section>
    
      <Card>
         <h3>Select a Customer</h3>
      <Select onChange={(e) => onSelect(e.target.value)}>
        <option value="" >-- Choose --</option>
        {customers.map(id => (
          <option key={id} value={id}>{id}</option>
        ))}
      </Select>
    </Card>
    
    </Section>
  );
}

CustomerList.propTypes = {
  transactions: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CustomerList;