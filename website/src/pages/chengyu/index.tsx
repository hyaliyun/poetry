import React, { useState } from 'react';

import wordsData from './idiom.json';
import styles from './PoemCard.module.css';
import Layout from '@theme/Layout';
import WordCard from './WordCard';
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
            {'成语'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

const WordList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(20); // Start by showing 20 words

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 20); // Load 20 more words each time
  };

  return (
    <div>
      <div className={styles.cardContainer}>
        {wordsData.slice(0, visibleCount).map((word, index) => (
          <WordCard key={index} {...word} />
        ))}
      </div>

      {/* Check against wordsData length */}
      {visibleCount < wordsData.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          查看更多
        </button>
      )}
    </div>
  );
};

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <TopBanner />
        <div className={styles.section}>
          <WordList />
        </div>
      </main>
    </Layout>
  );
}
