import styles from './styles.module.scss';
import MainSwiper from './swiper';

export default function index() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>This is Header</div>
      <div className={styles.menu}>This is Menu</div>
      <MainSwiper />
      <div className={styles.offers}>This is Offers</div>
      <div className={styles.user}>This is User</div>
    </div>
  );
}
