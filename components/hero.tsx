import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
  const HAWAII_ISLAND_URL = 'https://en.wikipedia.org/wiki/Hawaii_(island)'
  const VOLCANOES_NATL_PARK_URL = 'https://www.nps.gov/havo/index.htm'
  const KAUMANA_CAVES_URL =
    'https://www.alltrails.com/trail/hawaii/hawaii/kaumana-caves?u=i'
  const KULA_KAI_CAVERNS_URL = 'http://www.kulakaicaverns.com/'
  const KAZUMURA_CAVE_URL = 'https://kazumuracave.com/'
  const HAWAII_TRAVEL_URL = 'https://www.gohawaii.com/islands/hawaii-big-island'
  const HAWAII_SAFE_TRAVELS_URL = 'https://travel.hawaii.gov/#/'
  const KAU_CAVE_FARM_URL = 'https://www.facebook.com/KauCaveFarm/'
  const CAVE_LAW_URL =
    'https://law.justia.com/codes/hawaii/2011/division1/title1/chapter6d/'
  const CCH_DONATE_URL =
    'https://www.paypal.com/donate/?hosted_button_id=MF82S88EDD8EW'
  const NSS_DONATE_URL =
    'https://members.caves.org/donations/donate.asp?id=16842'
  const KEVIN_URL = 'http://adventureinhawaii.com/'

  function handleClick() {
    console.log('navigator.clipboard', navigator.clipboard.readText.name)
  }

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          <div>
            <Image
              src='/images/hawaii-grotto.jpg'
              alt='Hawaii grotto caving photo'
              width={680}
              height={510}
            />
          </div>
          Explore caves in <a>Hawai'i</a>
        </h1>
      </div>
      <p className={styles.description}>
        Go caving on your next Hawai'i vacation. No experience required.
      </p>
      <p className={styles.description}>
        <a href={HAWAII_ISLAND_URL} target='_blank'>
          Hawai'i Island
        </a>{' '}
        or the{' '}
        <a href={HAWAII_ISLAND_URL} target='_blank'>
          Big Island
        </a>{' '}
        is the largest island in the State of Hawai'i. Most of the caves are
        here.
      </p>
      <p className={styles.description}>
        A handful of cavers call the island home.
      </p>
      <p className={styles.description}>
        While tourists are drawn to{' '}
        <a href={VOLCANOES_NATL_PARK_URL} target='_blank'>
          Hawai'i Volcanoes National Park
        </a>{' '}
        or{' '}
        <a href={KAUMANA_CAVES_URL} target='_blank'>
          Kaumana Caves State Park
        </a>
        , we also have plenty of wild caves including{' '}
        <a href={KULA_KAI_CAVERNS_URL} target='_blank'>
          Kula Kai Caverns
        </a>{' '}
        and{' '}
        <a href={KAZUMURA_CAVE_URL} target='_blank'>
          Kazumura Cave
        </a>
        .
      </p>
      <p className={styles.description}>
        It is safe to travel to{' '}
        <a href={HAWAII_TRAVEL_URL} target='_blank'>
          Hawai'i
        </a>
        . Current travel and Covid-19 information may be found at{' '}
        <a href={HAWAII_SAFE_TRAVELS_URL} target='_blank'>
          travel.hawaii.gov
        </a>
        .
      </p>
      <p className={styles.description}>
        <a href={CAVE_LAW_URL} target='_blank'>
          Hawai'i Cave Law
        </a>{' '}
        has some of the strongest penalties in the United States for cave
        trespassing and vandalism. Be respectful.
      </p>
      <p className={styles.description}>
        There are lots of fun things to do outside of caving. If you want our
        opinion, just <a>ask</a>. We recommend booking tours with this{' '}
        <a href={KEVIN_URL} target='_blank'>
          caver-owned company
        </a>
        .
      </p>
      <p className={styles.description}>
        Cave access is made possible by grassroots conservation efforts by{' '}
        <a href={CCH_DONATE_URL} target='_blank'>
          Cave Conservancy of Hawai'i
        </a>{' '}
        and{' '}
        <a href={NSS_DONATE_URL} target='_blank'>
          National Speleological Society
        </a>
        . We welcome donations.
      </p>
      <p className={styles.description}>
        <a>Hawai'i Cave Week</a> is scheduled for January 29 - February 2, 2024
        All are invited. Email us for more information.
      </p>
      <p className={styles.description}>
        Want to get in touch?{' '}
        <a className={styles.email} onClick={handleClick}>
          hawaiigrotto808@gmail.com
        </a>
      </p>
    </div>
  )
}
