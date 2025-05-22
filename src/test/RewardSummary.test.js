import React from 'react';
import { render, screen } from '@testing-library/react';
import RewardSummary from '../components/rewardSummary';

const mockTransactions = [
  { customerId: 'C001', transactionId: 'T001', amount: 120, date: '2025-03-12' },
  { customerId: 'C001', transactionId: 'T002', amount: 75, date: '2025-03-15' },
  { customerId: 'C001', transactionId: 'T003', amount: 40, date: '2025-02-10' },
];

describe('RewardSummary component', () => {
  test('renders total reward points correctly', () => {
    render(<RewardSummary transactions={mockTransactions} customerId="C001" />);
  });

  
});
