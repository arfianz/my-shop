import styles from './styles.module.scss';

export default function Review({ review }) {
  return (
    <div className={styles.review}>
      <span>{review.review}</span>
      <br />
    </div>
  );
}
