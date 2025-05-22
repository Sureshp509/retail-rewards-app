import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, StrongText, Section } from '../styles/globalStyles';
import { calculatePoints } from '../utils/calculateRewards';

function RewardSummary({ transactions, customerId }) {
  // Filter transactions for selected customer
  const customerTxns = transactions.filter(t => t.customerId === customerId);

  // Group points by "MMM YYYY" (e.g. Mar 2025)
  const monthly = {};
  let total = 0;

  customerTxns.forEach(t => {
    const monthYear = new Date(t.date).toLocaleString('default', { month: 'short', year: 'numeric' });
    const points = calculatePoints(t.amount);

    monthly[monthYear] = (monthly[monthYear] || 0) + points;
    total += points;
  });

  return (
    <Section>
      <Card>
        <h3>Monthly & Total Reward Points</h3>
        {customerTxns.length === 0 ? (
          <p>No transactions available for this customer.</p>
        ) : (
          <>
            <List>
              {Object.entries(monthly).map(([monthYear, points]) => (
                <li key={monthYear}>
                  {monthYear}: {points} pts
                </li>
              ))}
            </List>
            <p>
              <StrongText>Total: {total} pts</StrongText>
            </p>
          </>
        )}
      </Card>
    </Section>
  );
}

RewardSummary.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.string.isRequired,
      transactionId: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  customerId: PropTypes.string.isRequired,
};

export default RewardSummary;
