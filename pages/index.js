import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import LoginForm from '../components/login-form';
import Link from 'next/link';

export default function Home() {
  /*return (
    <Layout home>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
      <main>
        <LoginForm/>
      </main>
    </Layout>
  );*/
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <LoginForm/>
      </main>
    </div>
  );
}