import styles from './styles.module.scss';

export default function index() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>This is Header</div>
      <div className={styles.menu}>This is Menu</div>
      <div className={styles.swiper}>This is Swiper</div>
      <div className={styles.offers}>This is Offers</div>
      <div className={styles.user}>This is User</div>
    </div>
  );
}
