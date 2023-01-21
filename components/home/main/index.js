import styles from './styles.module.scss';
import MainSwiper from './swiper';
import MainOffers from './offers';
import MainMenu from './menu';

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>This is Header</div>
      <MainMenu />
      <MainSwiper />
      <MainOffers />
      <div className={styles.user}>This is User</div>
    </div>
  );
}
