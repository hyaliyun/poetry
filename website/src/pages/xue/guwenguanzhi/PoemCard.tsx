import React from 'react';
import styles from './styles.module.css';

interface Poem {
  chapter: string;
  source: string;
  author: string;
  paragraphs: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  if (!poem.title) {
    return (
      <div className={styles.card}>
        <h2 className={styles.title}>No Title Provided</h2>
        <div className={styles.paragraphs}>
          {poem.paragraphs.map((para, index) => (
            <p key={index} className={styles.paragraph}>{para}</p>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <div className={styles.titleSectionAuthor}>
        <h2 className={styles.title}>{poem.source}</h2>
        <h2 className={styles.section}>{poem.chapter}</h2>
        <h2 className={styles.author}>{poem.author}</h2>
      </div>
      <div className={styles.paragraphs}>
        {poem.paragraphs.map((para, index) => (
          <p key={index} className={styles.paragraph}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default PoemCard;

