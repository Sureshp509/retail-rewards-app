import React, { useState } from 'react';
import { StyledTable } from '../styles/globalStyles';
import PropTypes from 'prop-types';
import { calculatePoints } from '../utils/calculateRewards';
import Pagination from './pagination';

function TransactionDetails({ transactions, customerId, filter }) {
  const filtered = transactions.filter(t => {
    const date = new Date(t.date);
    return (
      t.customerId === customerId &&
      date.getFullYear().toString() === filter.year &&
      (date.getMonth() + 1).toString().padStart(2, '0') === filter.month
    );
  });

  const [page, setPage] = useState(1);
  const perPage = 2;
  const totalPages = Math.ceil(filtered.length / perPage);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <h3>Transaction Details</h3>
      {filtered.length === 0 ? (
        <p>No transactions found for this filter.</p>
      ) : (
        <>
          <StyledTable border="1" cellPadding="5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(txn => (
                <tr key={txn.transactionId}>
                  <td>{txn.transactionId}</td>
                  <td>${txn.amount.toFixed(2)}</td>
                  <td>{txn.date}</td>
                  <td>{calculatePoints(txn.amount)}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}

TransactionDetails.propTypes = {
  transactions: PropTypes.array.isRequired,
  customerId: PropTypes.string.isRequired,
  filter: PropTypes.object.isRequired
};

export default TransactionDetails;