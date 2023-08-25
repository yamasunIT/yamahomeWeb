import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Alert } from '../components/Alert';
import { Nav } from '../components/Nav';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { HomeHeader } from '../components/HomeHeader';

export default function App({ Component, pageProps}) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(true);
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
    authCheck();
},[]);

function authCheck() {
  // redirect to login page if accessing a private page and not logged in 
  const items = JSON.parse(localStorage.getItem('user'));
  if (!items) {
    router.push('/account/login');
  } else {
    setUser(items);
  }
}
return (
  <>
    <Head>
      <title>日山智慧家電</title>
    </Head>
    <div>
      <Nav />
      <HomeHeader/>
      <Alert />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
);
}