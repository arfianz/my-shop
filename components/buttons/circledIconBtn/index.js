import styles from './styles.module.scss';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function CircledIconBtn({ type, text, icon }) {
  return (
    <button className={styles.button} type={type}>
      {text}
      <div className={styles.svg__wrap}>
        <BiRightArrowAlt />
      </div>
    </button>
  );
}
