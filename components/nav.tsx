import React, { useState, useCallback, useEffect } from "react";
import styles from "./nav.module.css";
import { useMediaQuery } from "../utils/useMediaQuery";
import { useRouter } from "next/router";

export default function Nav({ route }: any) {
  const isBreakpoint = useMediaQuery(600);
  const router = useRouter();

  function handleHamburgerClick() {
    console.log("hamburgerClicked!");
  }

  function handleContactUsClick() {
    console.log("contactUsClicked!");
  }

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <div className={styles.navItems}>
          <div className={styles.left}>
            <span className={styles.link} onClick={() => router.push(`/`)}>
              Hawai‘i Grotto
            </span>
          </div>
          <div className={styles.right}>
            <span
              className={styles.link}
              onClick={() => router.push(`/cavers-favorites`)}
            >
              Caver's Faves
            </span>
            <span
              className={styles.link}
              onClick={() => router.push(`/hawaii-cave-week-2025`)}
            >
              Cave Week
            </span>
          </div>
        </div>
      </div>
      {/* { isBreakpoint ? (
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
      )} */}
    </div>
  );
}
