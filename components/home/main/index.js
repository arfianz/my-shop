import styles from './styles.module.scss';
import MainSwiper from './swiper';
import MainOffers from './offers';
import MainMenu from './menu';
import MainUser from './user';

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>This is Header</div>
      <MainMenu />
      <MainSwiper />
      <MainOffers />
      <MainUser />
    </div>
  );
}
