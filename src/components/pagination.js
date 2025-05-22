import React from 'react';
import { Button} from '../styles/globalStyles';
import PropTypes from 'prop-types';

function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div style={{ marginTop: '10px' }}>
      <Button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
        Prev
      </Button>
      <span style={{ margin: '0 10px' }}>Page {page} of {totalPages}</span>
      <Button onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>
        Next
      </Button>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;