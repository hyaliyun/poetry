import React from 'react';
import styles from './styles.module.css';

interface Poem {
  chapter: string;
  paragraphs: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  const { title = 'No Title Provided', paragraphs } = poem;
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{poem.chapter}</h2>
      <div className={styles.paragraphs}>
        {paragraphs.map((para, index) => (
          <p key={index} className={styles.paragraph}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default PoemCard;

