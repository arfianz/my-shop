import Link from 'next/link';
import styles from './styles.module.scss';
import { IoLocationSharp } from 'react-icons/io5';

export default function Copyright() {
  return (
    <div className={styles.footer__copyright}>
      <section>©2022 My-Shop All Rights Reserved.</section>
      <section>
        <ul>
          {data.map((link) => (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> Indonesia
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
const data = [
  {
    name: 'Privacy Center',
    link: '',
  },
  {
    name: 'Privacy & Cookie Policy',
    link: '',
  },
  {
    name: 'Manage Cookies',
    link: '',
  },
  {
    name: 'Terms & Conditions',
    link: '',
  },
  {
    name: 'Copyright Notice',
    link: '',
  },
];