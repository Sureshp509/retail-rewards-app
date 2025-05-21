import { mockTransactions } from '../data/mockData';

export const fetchTransactions = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.95) {
        resolve(mockTransactions);
      } else {
        reject('Failed to fetch transactions');
      }
    }, 1000);
  });