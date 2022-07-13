import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './pagination.scss';

export const Pagination = (props) => {
  const { pagination, onPageChange } = props;

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };
  return (
    <div className="pagination-container">
      <button
        className="btn-prev"
        disabled={pagination <= 1}
        onClick={() => handlePageChange(pagination - 1)}
      >
        <NavigateBeforeIcon className="prev-icon" />
      </button>
      <button
        className="btn-next"
        disabled={pagination >= 467}
        onClick={() => handlePageChange(pagination + 1)}
      >
        <NavigateNextIcon className="next-icon" />
      </button>
    </div>
  );
};
