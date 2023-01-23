import styles from './styles.module.scss';
import usePagination from './pagination';
import { useState } from 'react';
import { Pagination } from '@mui/material';
import Review from './review';

export default function Table({ reviews }) {
  // console.log(reviews);
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(reviews.length / PER_PAGE);
  const _DATA = usePagination(reviews, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div className={styles.table}>
      <div className={styles.table__header}></div>
      <div className={styles.table__data}>
        {_DATA.currentData().map((review, i) => (
          <Review review={review} key={i} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={count}
          page={page}
          variant='round'
          shape='round'
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
