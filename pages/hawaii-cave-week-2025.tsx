import React from "react";
import styles from "../styles/home.module.css";
import Head from "next/head";
import Nav from "../components/nav";
import CaveWeek2025 from "../components/cave-week-2025";

export default function HawaiiCaveWeek2025() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hawaii Grotto</title>
        <meta name="description" content="Explore caves on the Big Island" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav route="Hawai‘i Cave Week 2025" />
      <CaveWeek2025 />
    </div>
  );
}
