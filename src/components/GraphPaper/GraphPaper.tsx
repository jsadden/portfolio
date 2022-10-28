import React from 'react';
import styles from './styles.module.css';

interface Props {
  entries: string[];
  title: string;
}

export const GraphPaper = ({ title, entries }: Props) => {
  return (
    <div className={styles.paperContainer}>
      <div className={styles.paperEdgeContainer}>
        <div className={styles.paperEdgeTop} />
        <div className={styles.paperEdgeBottom} />
      </div>

      <div className={styles.line}>
        <div className={styles.title}>{title}</div>
      </div>

      {entries.map((entry, i) => (
        <div key={i} className={styles.line}>
          <div className={styles.entryText}>{entry}</div>
        </div>
      ))}
    </div>
  );
};
