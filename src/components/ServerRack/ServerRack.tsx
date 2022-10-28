import React from 'react';
import styles from './styles.module.css';

interface Props {
  entries: string[];
  title: string;
}

export const ServerRack = ({ title, entries }: Props) => {
  return (
    <div className={styles.rackContainer}>
      <div className={styles.entryContainer}>
        <div className={styles.entryGroup}>
          <div className={styles.greenLight} />
          <div className={styles.titleText}>{title}</div>
        </div>

        <div className={styles.entryGroup}>
          <div className={styles.port} />
          <div className={styles.redLight} />
        </div>
      </div>

      {entries.map((entry, i) => (
        <div key={i} className={`${styles.entryContainer} ${i % 2 === 0 ? styles.darkEntry : ''}`}>
          <div className={styles.entryGroup}>
            <div className={styles.greenLight} />
            <div className={styles.entryText}>{entry}</div>
          </div>

          <div className={styles.entryGroup}>
            <div className={styles.port} />
            <div className={styles.redLight} />
          </div>
        </div>
      ))}
    </div>
  );
};
