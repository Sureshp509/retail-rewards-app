import React, { useEffect, useState } from 'react';
import { fetchTransactions } from './api/fetchTransactions';
import CustomerList from './components/customerList';
import RewardSummary from './components/rewardSummary';
import TransactionDetails from './components/transactionDetails';
import Filters from './components/filters';
import { Container } from './styles/globalStyles';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [filter, setFilter] = useState({ month: '03', year: '2025' });

  useEffect(() => {
    fetchTransactions()
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleCustomerSelect = (customerId) => setSelectedCustomer(customerId);
  const handleFilterChange = (filter) => setFilter(filter);

  return (
    <Container>
      <h2>Retailer Rewards Program</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <>
          <CustomerList transactions={transactions} onSelect={handleCustomerSelect} />
          {selectedCustomer && (
            <>
              <RewardSummary
                transactions={transactions}
                customerId={selectedCustomer}
              />
                <Filters onChange={handleFilterChange} />
              <TransactionDetails
                transactions={transactions}
                customerId={selectedCustomer}
                filter={filter}
              />
             
             
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default App;