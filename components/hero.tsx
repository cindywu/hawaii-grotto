import React from 'react'
import styles from './hero.module.css'

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Explore caves in <a>Hawai'i</a>
        </h1>
      </div>
      <p className={styles.description}>
        Go caving on your next Hawai'i vacation. No experience required.
      </p>
      <p className={styles.description}>
        <a>Hawai'i Island</a> or the <a>Big Island</a> is the largest island in the State of Hawai'i. Most of the caves are here.
      </p>
      <p className={styles.description}>
        A handful of <a>cavers</a> call the island home.
      </p>
      <p className={styles.description}>
        While tourists are drawn to <a>Hawai'i Volcanoes National Park</a> or <a>Kaumana Caves State Park</a>, we also have plenty of wild caves including <a>Kula Kai Caverns</a> and <a>Kazumura Cave</a>.
      </p>
      <p className={styles.description}>
        It is safe to travel to Hawai'i. Proof of COVID-19 vaccination or a negative COVID-19 test may be accepted to avoid quarantine. Specific details can be found at <a>travel.hawaii.gov</a>.
      </p>
      <p className={styles.description}>
        For National Speleological Society members it is free to stay at the <a>Ka'u Cave Farm House</a>, as long as it serves as a base from which to cave. 
      </p>
      <p className={styles.description}>
        <a>Hawai'i Cave Law</a> has some of the strongest penalties in the United States for cave trespassing and vandalism. Be respectful.
      </p>
      <p className={styles.description}>
        There are lots of fun things to do outside of caving. If you want our opinion, just <a>ask</a>.
      </p>
      <p className={styles.description}>
        Cave access is made possible by grassroots conservation efforts by <a>Cave Conservancy of Hawai'i</a> and <a>National Speleological Society</a>. We welcome donations.
      </p>
      <p className={styles.description}>
        Want to go on a cave trip? <a>hawaiigrotto@gmail.com</a>
      </p>
    </div>
  )
}
