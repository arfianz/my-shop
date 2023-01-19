import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';
import { RiSearch2Line } from 'react-icons/ri';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

export default function Main() {
  const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href='/'>
          <a className={styles.logo}>
            <img src='../../../logo.png' alt='' />
          </a>
        </Link>
        <div className={styles.search}>
          <input type='text' placeholder='Search...' />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href='/cart'>
          <a className={styles.cart}>
            <MdShoppingCart />
            <span>{cart.length}</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
