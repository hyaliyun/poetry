import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  author: string;
  title?: string; 
  paragraphs: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  if (!poem.title) {
    console.error("PoemCard received undefined title:", poem);
    return null;  // Skip rendering if title is missing
  }
  const sealCharacter = poem.title.charAt(0); // Extract seal character based on author name
  const seal = poem.title.charAt(1);
  const titles = poem.title.charAt(2);
  const auth = poem.author.charAt(0);
  return (
    <div className={styles.card}>
      <div className={styles.seal}>{auth }</div>
      <h2>{sealCharacter}{seal}{titles}</h2>
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
