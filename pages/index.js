import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {

  const Button = () => {

    const handleClick = () => {
      fetch('http://localhost:8000/test')
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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Button/>
    </Layout>
  );
}