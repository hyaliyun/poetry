import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  title?: string; 
  section: string;
  chapter: string;
  content: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  const { title = 'No Title Provided', paragraphs } = poem;
  const sealCharacter = poem.chapter.charAt(0); // Extract seal character based on author name

  return (
    <div className={styles.card}>
      <div className={styles.seal}>{sealCharacter}</div>
      <h2>{title}</h2>
      <div className={styles.paragraphs}>
        {poem.content.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      <div className={styles.author}>— {poem.section}</div>
    </div>
  );
};

export default PoemCard;
