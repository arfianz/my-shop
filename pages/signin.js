import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/signin.module.scss';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import LoginInput from '../components/inputs/loginInput';
import { useState } from 'react';
import CircledIconBtn from '../components/buttons/circledIconBtn';
import { getProviders, signIn } from 'next-auth/react';

const initialvalues = {
  login_email: '',
  login_password: '',
};

export default function signin({ providers }) {
  // console.log(providers);
  const [user, setUser] = useState(initialvalues);
  const { login_email, login_password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required('Email address is required.')
      .email('Please enter a valid email address.'),
    login_password: Yup.string().required('Please enter a password'),
  });
  // console.log(user);

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
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type='text'
                    name='login_email'
                    icon='email'
                    placeholder='Email Address'
                    onChange={handleChange}
                  />
                  <LoginInput
                    type='password'
                    name='login_password'
                    icon='password'
                    placeholder='Password'
                    onChange={handleChange}
                  />
                  <CircledIconBtn type='submit' text='Sign In' />
                  <div className={styles.forgot}>
                    <Link href='/auth/forgot'>Forgot password ?</Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => {
                  if (provider.name == 'Credentials') {
                    return;
                  }
                  return (
                    <div key={provider.name}>
                      <button
                        className={styles.social__btn}
                        onClick={() => signIn(provider.id)}
                      >
                        <img src={`../../icons/${provider.name}.png`} alt='' />
                        Sign in with {provider.name}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer country='Indonesia' />
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  // console.log(providers);

  return {
    props: { providers },
  };
}
