import Link from 'next/link';
import axios from 'axios';

import styles from './styles.module.scss';
import Share from './share';
import Accordian from './accordian';
import SimilarSwiper from './similarSwiper';

import { Rating } from '@mui/material';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { TbPlus, TbMinus } from 'react-icons/tb';
import { BsHandbagFill, BsHeart } from 'react-icons/bs';

export default function Infos({ product, setActiveImg }) {
  const router = useRouter();

  const [size, setSize] = useState(router.query.size);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    setSize('');
    setQty(1);
  }, [router.query.style]);
  useEffect(() => {
    if (qty > product.quantity) {
      setQty(product.quantity);
    }
  }, [router.query.size]);

  const addToCartHandler = async () => {
    const { data } = await axios.get(
      `/api/product/${product._id}?style=${product.style}&size=${router.query.size}`
    );
    console.log('data ---->', data);
  };

  return (
    <div className={styles.infos}>
      <div className={styles.infos__container}>
        <h1 className={styles.infos__name}>{product.name}</h1>
        <h2 className={styles.infos__sku}>{product.sku}</h2>
        <div className={styles.infos__rating}>
          <Rating
            name='half-rating-read'
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            style={{ color: '#FACF19' }}
          />
          ({product.numReviews}
          {product.numReviews == 1 ? ' review' : ' reviews'})
        </div>

        <div className={styles.infos__price}>
          {!size ? <h2>{product.priceRange}</h2> : <h1>{product.price}</h1>}
          {product.discount > 0 ? (
            <h3>
              {size && <span>{product.priceBefore}$</span>}
              <span>(-{product.discount}%)</span>
            </h3>
          ) : (
            ''
          )}
        </div>

        <span className={styles.infos__shipping}>
          {product.shipping
            ? `+${product.shipping}$ Shipping fee`
            : 'Free Shipping'}
        </span>

        <span>
          {size
            ? product.quantity
            : product.sizes.reduce((start, next) => start + next.qty, 0)}{' '}
          pieces available.
        </span>

        <div className={styles.infos__sizes}>
          <h4>Select a Size : </h4>
          <div className={styles.infos__sizes_wrap}>
            {product.sizes.map((size, i) => (
              <Link
                href={`/product/${product.slug}?style=${router.query.style}&size=${i}`}
              >
                <div
                  className={`${styles.infos__sizes_size} ${
                    i == router.query.size && styles.active_size
                  }`}
                  onClick={() => setSize(size.size)}
                >
                  {size.size}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.infos__colors}>
          {product.colors &&
            product.colors.map((color, i) => (
              <span
                className={i == router.query.style ? styles.active_color : ''}
                onMouseOver={() =>
                  setActiveImg(product.subProducts[i].images[0].url)
                }
                onMouseLeave={() => setActiveImg('')}
              >
                <Link href={`/product/${product.slug}?style=${i}`}>
                  <img src={color.image} alt='' />
                </Link>
              </span>
            ))}
        </div>

        <div className={styles.infos__qty}>
          <button onClick={() => qty > 1 && setQty((prev) => prev - 1)}>
            <TbMinus />
          </button>
          <span>{qty}</span>
          <button
            onClick={() => qty < product.quantity && setQty((prev) => prev + 1)}
          >
            <TbPlus />
          </button>
        </div>

        <div className={styles.infos__actions}>
          <button
            disabled={product.quantity < 1}
            style={{ cursor: `${product.quantity < 1 ? 'not-allowed' : ''}` }}
            onClick={() => addToCartHandler()}
          >
            <BsHandbagFill />
            <b>Add To Cart</b>
          </button>
          <button>
            <BsHeart />
            <b>Add to Wishlist</b>
          </button>
        </div>

        <Share />
        <Accordian details={[product.description, ...product.details]} />
        <SimilarSwiper />
      </div>
    </div>
  );
}
