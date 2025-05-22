import styled from 'styled-components';

// Container for the full app
export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

// Section wrapper
export const Section = styled.section`
  margin-bottom: 30px;
`;

// Responsive Flexbox container
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Card-style display
export const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 20px;
  flex: 1;
  min-width: 280px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Dropdown styling
export const Select = styled.select`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 200px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Table styling
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e1e1e1;
  }

  th {
    background-color: #f3f3f3;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    th, td {
      padding: 8px;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 16px;

  li {
    padding: 6px 0;
    border-bottom: 1px solid #e1e1e1;
    font-weight: 500;
  }
`;

export const StrongText = styled.strong`
  font-size: 1.1rem;
  color: #222;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
  }
`;

