import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import styles from '../styles/Home.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/home/main';
import FlashDeals from '../components/home/flashDeals';
import Category from '../components/home/category';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  gamingSwiper,
  homeImprovSwiper,
  women_accessories,
  women_dresses,
  women_shoes,
  women_swiper,
} from '../data/home';
import { useMediaQuery } from 'react-responsive';
import ProductsSwiper from '../components/productsSwiper';

export default function Home({ country }) {
  // console.log(country);
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: '(max-width:850px)' });
  const isMobile = useMediaQuery({ query: '(max-width:550px)' });

  return (
    <div>
      <Header country={country} />
      {session ? 'you are logged in' : 'you are not logged in'}
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category
              header='Dresses'
              products={women_dresses}
              background='#5a31f4'
            />
            {!isMedium && (
              <Category
                header='Shoes'
                products={women_shoes}
                background='#3c811f'
              />
            )}
            {isMobile && (
              <Category
                header='Shoes'
                products={women_shoes}
                background='#3c811f'
              />
            )}
            <Category
              header='Accessories'
              products={women_accessories}
              background='#000'
            />
          </div>
          <ProductsSwiper products={women_swiper} />
          <ProductsSwiper
            products={gamingSwiper}
            header='For Gamers'
            bg='#2f82ff'
          />
          <ProductsSwiper
            products={homeImprovSwiper}
            header='House Improvements'
            bg='#5a31f4'
          />
        </div>
      </div>
      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get('https://api.ipregistry.co/?key=r208izz0q0icseks')
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: 'Indonesia',
        flag: 'https://cdn.ipregistry.co/flags/emojitwo/id.svg',
      },
    },
  };
}
