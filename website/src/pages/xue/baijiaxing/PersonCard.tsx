import React from 'react';
import styles from './styles.module.css';


export default function PersonCard({ person }: { person: { surname: string; place: string } }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{person.surname}</h2>
        <p>{person.place}</p>
      </div>
    </div>
  );
};

