import styles from './styles.module.scss';
import MainHeader from './header';
import MainMenu from './menu';
import MainSwiper from './swiper';
import MainOffers from './offers';
import MainUser from './user';

export default function Main() {
  return (
    <div className={styles.main}>
      <MainHeader />
      <MainMenu />
      <MainSwiper />
      <MainOffers />
      <MainUser />
    </div>
  );
}
