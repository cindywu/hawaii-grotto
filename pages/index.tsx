import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Nav from '../components/nav'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hawaii Grotto</title>
        <meta name="description" content="Explore caves on the Big Island" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Explore caves in <a>Hawaii</a>
          </h1>
        </div>

        <p className={styles.description}>
          Go caving on your next Hawaii vacation. No experience required.
        </p>
      </main>
      
    </div>
  )
}

export default Home
