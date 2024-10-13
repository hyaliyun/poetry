import React from 'react';
import styles from './styles.module.css';

export default function PersonCard({ person }: { person: { chapter: string; paragraphs: string } }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <h2>{person.chapter}</h2>
        <p>{person.paragraphs}</p>
      </div>
    </div>
  );
};

