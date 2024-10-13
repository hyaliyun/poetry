import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  rhythmic: string;
  author: string;
  title?: string; 
  notes: string[];
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
  const sealCharacter = poem.title.charAt(0); // Extract seal character based on author name

  return (
    <div className={styles.card}>
      <div className={styles.seal}>{sealCharacter}</div>
      <h2>{poem.rhythmic}</h2>
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
