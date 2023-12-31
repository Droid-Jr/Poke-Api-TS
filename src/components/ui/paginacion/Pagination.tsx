// Pagination.tsx

import React from 'react';
import './style/pagination.css';

interface PaginationProps {
  page: number;
  maxPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ page, maxPage, setPage }: PaginationProps) {
  const pagesPerBlock = 6;
  const currentBlock = Math.ceil(page / pagesPerBlock);
  const maxBlock = Math.ceil(maxPage / pagesPerBlock);

  const arrPages: number[] = [];
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1;
  const finalPage = maxBlock === currentBlock ? maxPage : currentBlock * pagesPerBlock;

  for (let i = initialPage; i <= finalPage; i++) {
    arrPages.push(i);
  }

  const handlePage = (number: number) => {
    setPage(number);
  };

  const handlePrevious = () => {
    if (page - 1 > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (page + 1 <= maxPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item page__active " onClick={handlePrevious}>
          <i className="fa-sharp fa-solid fa-backward"></i>
        </li>
        {arrPages.map((e) => (
          <li
            className={`pagination__item  ${page === e && 'page__active'}`}
            onClick={() => handlePage(e)}
            key={e}
          >
            {e}
          </li>
        ))}
        <li className="pagination__item  page__active" onClick={handleNext}>
          <i className="fa-sharp fa-solid fa-forward"></i>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
