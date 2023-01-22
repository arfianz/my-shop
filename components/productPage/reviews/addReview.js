import styles from './styles.module.scss';
import Select from './select';
import { useState } from 'react';

export default function AddReview({ product }) {
  const [size, setSize] = useState('');
  return (
    <div className={styles.reviews__add}>
      <div className='flex.wrap'>
        <div className='flex' style={{ gap: '10px' }}>
          Size :
          <Select property={size} text='Size' data={product.allSizes} />
        </div>
      </div>
    </div>
  );
}
