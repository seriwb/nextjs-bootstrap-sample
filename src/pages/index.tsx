import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boostrap Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://https://github.com/seriwb/nextjs-bootstrap-samplenextjs.org">
            Next.js samples with Bootstrap5!
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/blog">
            <a className={styles.card}>
              <h3>Blog Template &rarr;</h3>
              <p></p>
            </a>
          </Link>

          <Link href="/dashboard">
            <a className={styles.card}>
              <h3>Dashboard Template &rarr;</h3>
              <p></p>
            </a>
          </Link>

          <Link href="/signin">
            <a className={styles.card}>
              <h3>Sign-in Template &rarr;</h3>
              <p></p>
            </a>
          </Link>

          <Link href="/pricing">
            <a className={styles.card}>
              <h3>Pricing Template &rarr;</h3>
              <p></p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/seriwb" target="_blank" rel="noopener noreferrer">
          seri
        </a>
      </footer>
    </div>
  );
}
