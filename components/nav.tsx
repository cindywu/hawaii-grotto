import React, { useState, useCallback, useEffect } from 'react'
import styles from './nav.module.css'
import { useMediaQuery } from '../utils/useMediaQuery'

export default function Nav() {

  const isBreakpoint = useMediaQuery(600)

  function handleHamburgerClick() {
    console.log('hamburgerClicked!')
  }

  function handleContactUsClick() {
    console.log('contactUsClicked!')
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        Hawaii Grotto
      </div>
      { isBreakpoint ? (
        <div
          className={styles.hamburger}
          onClick={handleHamburgerClick}
        >
          ≡
        </div>
      ) : (
        <button 
          className={styles.btn}
          onClick={handleContactUsClick}
        >
          Contact us
        </button>
      )}
    </div>
  )
}
