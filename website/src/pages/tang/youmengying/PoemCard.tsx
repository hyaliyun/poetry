import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  content: string;

  comment: string[];
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
