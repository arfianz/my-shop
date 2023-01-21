import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import styles from '../styles/Home.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/home/main';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({ country }) {
  // console.log(country);
  const { data: session } = useSession();

  return (
    <div>
      <Header country={country} />
      {session ? 'you are logged in' : 'you are not logged in'}
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
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
