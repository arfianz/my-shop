import Links from './Links';
import Socials from './Socials';
import Newsletter from './Newsletter';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <Newsletter />
      </div>
    </footer>
  );
}
