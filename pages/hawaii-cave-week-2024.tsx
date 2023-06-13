import React from 'react'
import styles from '../styles/home.module.css'
import Head from 'next/head'
import Nav from '../components/nav'
import CaveWeek2024 from '../components/cave-week-2024'

export default function HawaiiCaveWeek2024() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hawaii Grotto</title>
        <meta name='description' content='Explore caves on the Big Island' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav route='Hawai‘i Cave Week 2024' />
      <CaveWeek2024 />
    </div>
  )
}
