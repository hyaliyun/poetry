import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  title?: string; 
  author: string;
  para: string[];
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
  const sealCharacter = poem.author.charAt(1); // Extract seal character based on author name

  return (
    <div className={styles.card}>
      <h2>{poem.title}</h2>
      <div className={styles.paragraphs}>
        {poem.para.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      <div className={styles.author}>{sealCharacter}</div>
    </div>
  );
};

export default PoemCard;
