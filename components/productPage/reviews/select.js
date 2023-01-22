import styles from './styles.module.scss';
import { IoArrowDown } from 'react-icons/io5';
import { useState } from 'react';

export default function Select({ property, text, data }) {
  // console.log(data);
  const [visible, setVisible] = useState(true);
  return (
    <div className={styles.select}>
      <div className={styles.select__header}>
        <span
          classname={`flex ${styles.select__header_wrap}`}
          style={{ padding: '0 5px' }}
        >
          {property || `Select ${text}`}
          <IoArrowDown />
        </span>
        {visible && (
          <ul className={styles.select__header_menu}>
            {data.map((item, i) => {
              if (text == 'Size') {
                return (
                  <li key={i}>
                    <span>{item.size}</span>
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
