import React from 'react';
import styles from './styles.module.css';

interface Poem {
  title?: string; 
  section: string;
  author: string;
  content: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  const { title = 'No Title Provided', paragraphs } = poem;
  return (
    <div className={styles.card}>
      <div className={styles.titleSectionAuthor}>
        <h2 className={styles.title}>{poem.section}</h2>
        <h2 className={styles.section}>{title}</h2>
        <h2 className={styles.author}>{poem.author}</h2>
      </div>
      <div className={styles.paragraphs}>
        {poem.content.map((para, index) => (
          <p key={index} className={styles.paragraph}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default PoemCard;

