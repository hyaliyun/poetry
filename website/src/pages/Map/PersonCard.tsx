import React from 'react';
import styles from './styles.module.css';

export default function PersonCard({ person }: { person: { name: string; desc: string } }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{person.name}</h2>
        <p>{person.desc}</p>
      </div>
    </div>
  );
};

