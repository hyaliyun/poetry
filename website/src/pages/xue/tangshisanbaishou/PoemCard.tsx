import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  chapter: string;
  author: string;
  subchapter: null;
  paragraphs: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  if (!poem.title) {
    console.error("PoemCard received undefined title:", poem);
    return null;  // Skip rendering if title is missing
  }
  const sealCharacter = poem.author.charAt(0); // Extract seal character based on author name

  return (
    <div className={styles.card}>
      <div className={styles.seal}>{sealCharacter}</div>
      <h2>{poem.chapter}</h2>
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
