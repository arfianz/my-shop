import styles from './styles.module.scss';
import Ad from './Ad';
import Top from './Top';
import Main from './Main';

export default function Header({ country }) {
  return (
    <header className={styles.header}>
      <Ad />
      <Top country={country} />
      <Main />
    </header>
  );
}
