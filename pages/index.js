import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {

  const Button = () => {

    const handleClick = () => {
      fetch('http://192.168.1.126:8000/smartPlug/on')
        .then(response => response.json())
        .then(data => {
          // Process the received data here
          console.log(data);
        })
        .catch(error => {
          // Handle any error that occurred
          console.error(error);
        });
    };
    return (
      <button className={utilStyles.button} onClick={handleClick}>
        Click me
      </button>
    );
  }

  const On = () => {
    const handleClick = () => {
      fetch('http://192.168.1.126:8000/smartPlug/on')
        .then(response => response.json())
        .then(data => {
          // Process the received data here
          console.log(data);
        })
        .catch(error => {
          // Handle any error that occurred
          console.error(error);
        });
    };

    return (
      <button className={utilStyles.on} onClick={handleClick}>
        電燈打開
      </button>
    );
  }

  const Off = () => {
    const handleClick = () => {
      fetch('http://192.168.1.126:8000/smartPlug/off')
        .then(response => response.json())
        .then(data => {
          // Process the received data here
          console.log(data);
        })
        .catch(error => {
          // Handle any error that occurred
          console.error(error);
        });
    };

    return (
      <button className={utilStyles.off} onClick={handleClick}>
        電燈關閉
      </button>
    );
  }


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Button/>
      <On />
      <Off/>
    </Layout>
  );
}