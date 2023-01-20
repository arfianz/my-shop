import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/signin.module.scss';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';

export default function signin() {
  return (
    <>
      <Header country='Indonesia' />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy if you join us ! <Link href='/'>Lets Shopping</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer country='Indonesia' />
    </>
  );
}
