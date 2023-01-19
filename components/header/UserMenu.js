import Link from 'next/link';
import styles from './styles.module.scss';

export default function UserMenu({ LoggedIn }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to My Shop !</h4>
      {LoggedIn ? (
        <div className={styles.flex}>
          <img
            src='https://www.pngarts.com/files/11/Avatar-PNG-Picture.png'
            alt=''
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>Mr. XXX</h3>
            <span>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href='/profile'>Account</Link>
        </li>
        <li>
          <Link href='/profile/orders'>My Orders</Link>
        </li>
        <li>
          <Link href='/profile/messages'>Message Center</Link>
        </li>
        <li>
          <Link href='/profile/address'>Address</Link>
        </li>
        <li>
          <Link href='/profile/wishlist'>Wishlist</Link>
        </li>
      </ul>
    </div>
  );
}
