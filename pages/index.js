import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {




 const Test = () => {
  return (
    <h2>hello world</h2>
  )
 }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Test/>
    </Layout>
  );
}