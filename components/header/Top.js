import Link from 'next/link';
import styles from './styles.module.scss';
import { MdSecurity } from 'react-icons/md';
import {
  BsSuitHeart,
  BsFillTelephoneFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import { useState } from 'react';
import UserMenu from './UserMenu';

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img
              src='https://www.seekpng.com/png/detail/154-1542644_small-25mm-lapel-pin-button-badge-novelty-indonesia.png'
              alt=''
            />
            <span>idr / usd</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer protect</span>
          </li>
          <li className={styles.li}>
            <BsFillTelephoneFill />
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <BsFillEmojiSmileFill />
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href='/profile/wishlist'>
              <span>Wishlist</span>
            </Link>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {loggedIn ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img src='https://www.pngarts.com/files/11/Avatar-PNG-Picture.png' />
                  <span>Mr. XXX</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu LoggedIn={loggedIn} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
