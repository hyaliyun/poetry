import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  title?: string; 
  author: string;
  strains: string[];
  paragraphs: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  if (!poem.title) {
    console.error("PoemCard received undefined title:", poem);
    return null;  // Skip rendering if title is missing
  }

  return (
    <div className={styles.card}>
      <h2>{poem.title}</h2>
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
