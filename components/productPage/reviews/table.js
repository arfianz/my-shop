import styles from './styles.module.scss';
import usePagination from './pagination';
import Review from './review';
import TableHeader from './tableHeader';

import { Pagination } from '@mui/material';
import { useState } from 'react';

export default function Table({ reviews, allSizes, colors }) {
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
      <TableHeader
        reviews={reviews}
        allSizes={[{ size: 'All' }, ...allSizes]}
        colors={[{ color: '', image: '' }, ...colors]}
      />
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
          shape='rounded'
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
