import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/signin.module.scss';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import LoginInput from '../components/inputs/loginInput';

export default function signin() {
  return (
    <>
      <Header country='Indonesia' />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy if you join us ! <Link href='/'>Lets Shopping</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>
              Get access to one of the best eCommerce services in the world.
            </p>
            <Formik>
              {(form) => (
                <Form>
                  <LoginInput icon='email' placeholder='Email Address' />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country='Indonesia' />
    </>
  );
}
