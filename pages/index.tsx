import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import ContactForm from '../components/contact-form'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hawaii Grotto</title>
        <meta name="description" content="Explore caves on the Big Island" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Hero/>
      {/* <ContactForm/> */}
    </div>
  )
}

export default Home
