import React from 'react'
import styles from './hero.module.css'

export default function Hero() {
  return (
    <div className={styles.main}>
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Explore caves in <a>Hawaii</a>
      </h1>
    </div>
    <p className={styles.description}>
      Go caving on your next Hawaii vacation. No experience required.
    </p>
  </div>
  )
}
