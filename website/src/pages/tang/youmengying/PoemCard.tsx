import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  content: string;

  comment: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  if (!poem.title) {
    console.error("PoemCard received undefined title:", poem);
    return null;  // Skip rendering if title is missing
  }
  const sealCharacter = poem.content.charAt(2); // Extract seal character based on author name
  const seal = poem.content.charAt(3);
  const author = poem.content.charAt(4);
  return (
    <div className={styles.card}>
      <div className={styles.seal}>{seal}</div>
      <h2>{sealCharacter}</h2>
      <div className={styles.paragraphs}>
        {poem.comment.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      <div className={styles.author}>— {author}</div>
    </div>
  );
};

export default PoemCard;
