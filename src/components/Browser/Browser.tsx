import React from 'react';
import styles from './styles.module.css';

interface Props {
  alignRight?: boolean;
  entries: string[];
  title: string;
}

export const Browser = ({ alignRight, title, entries }: Props) => {
  return (
    <div className={`${styles.browserContainer} ${alignRight ? styles.alignRight : ''}`}>
      <div className={styles.browserHeader} />
      <div className={styles.headerRed} />
      <div className={styles.headerYellow} />
      <div className={styles.headerGreen} />

      <div className={styles.title}>{title}</div>
      {entries.map((entry, i) => (
        <div key={i} className={styles.entryText}>
          {entry}
        </div>
      ))}
    </div>
  );
};
