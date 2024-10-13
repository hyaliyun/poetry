import React, { useState } from 'react';
import PersonCard from './PersonCard';
import peopleData from './authors.json';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function TopBanner() {
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;

  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          to="https://www.543x.com"
          className={styles.topBannerTitleText}>
          <Translate
            id="homepage.banner.launch.newVersion"
            values={{ newVersion: announcedVersion }}>
            {'人物介绍'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

function App() {
  const [visibleCount, setVisibleCount] = useState(24); // Show 3 cards initially

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12); // Load 3 more cards
  };

  return (
    <div className={styles.cardContainer}>
      {peopleData.slice(0, visibleCount).map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}

      {visibleCount < peopleData.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          查看更多
        </button>
      )}
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <TopBanner />
        <div className={styles.section}>
          <App />
        </div>
      </main>
    </Layout>
  );
}
