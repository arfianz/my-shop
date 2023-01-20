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
import { useSession } from 'next-auth/react';
import UserMenu from './UserMenu';

export default function Top({ country }) {
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img src={country.flag} alt='' />
            <span>{country.name} / usd</span>
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
            {session ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img
                    src={session.user.image}
                    alt=''
                    referrerPolicy='no-referrer'
                  />
                  <span>{session.user.name}</span>
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
            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
