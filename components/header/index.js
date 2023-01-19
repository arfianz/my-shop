import styles from './styles.module.scss';
import Ad from './Ad';

export default function Header() {
  return (
    <header className={styles.header}>
      <Ad />
    </header>
  );
}
