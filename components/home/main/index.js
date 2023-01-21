import styles from './styles.module.scss';
import MainSwiper from './swiper';
import MainOffers from './offers';

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>This is Header</div>
      <div className={styles.menu}>This is Menu</div>
      <MainSwiper />
      <MainOffers />
      <div className={styles.user}>This is User</div>
    </div>
  );
}
