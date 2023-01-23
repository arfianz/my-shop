import styles from './styles.module.scss';
import AddReview from './addReview';

import { Rating } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';
import Table from './table';

export default function Reviews({ product }) {
  const { data: session } = useSession();
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__container}>
        <h1>Customer Reviews ({product.reviews.length})</h1>
        <div className={styles.reviews__stats}>
          <div className={styles.reviews__stats_overview}>
            <span>Average Rating</span>
            <div className={styles.reviews__stats_overview_rating}>
              <Rating
                name='half-rating-read'
                defaultValue={product.rating}
                precision={0.5}
                readOnly
                style={{ color: '#FACF19' }}
              />
              {product.rating == 0 ? 'No review yet.' : product.rating}
            </div>
          </div>
          <div className={styles.reviews__stats_reviews}>
            {product.ratings.map((rating, i) => (
              <div className={styles.reviews__stats_reviews_review}>
                <Rating
                  name='half-rating-read'
                  defaultValue={5 - i}
                  readOnly
                  style={{ color: '#FACF19' }}
                />
                <div className={styles.bar}>
                  <div
                    className={styles.bar__inner}
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <span>{rating.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {session ? (
          <AddReview product={product} />
        ) : (
          <button onClick={() => signIn()} className={styles.login_btn}>
            Login to add review
          </button>
        )}

        <Table
          reviews={product.reviews}
          allSizes={product.allSizes}
          colors={product.colors}
        />
      </div>
    </div>
  );
}
