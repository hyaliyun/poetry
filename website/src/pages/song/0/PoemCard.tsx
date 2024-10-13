import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  title?: string; 
  author: string;
  tags: string[];
  paragraphs: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  const { title = 'No Title Provided', paragraphs } = poem;

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.paragraphs}>
        {poem.paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      <div className={styles.author}>— {poem.author}</div>
    </div>
  );
};

export default PoemCard;
