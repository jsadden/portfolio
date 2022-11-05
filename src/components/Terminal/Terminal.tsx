import React from 'react';
import styles from './styles.module.css';

interface Props {
  entries: string[];
  title: string;
}

export const Terminal = ({ title, entries }: Props) => {
  return (
    <div className={styles.terminalContainer}>
      <div className={styles.line}>
        <div className={styles.title}>{`$ ls "${title}"`}</div>
      </div>

      {entries.map((entry, i) => (
        <div key={i} className={styles.line}>
          <div className={styles.entryText}>{entry}</div>
        </div>
      ))}

      <div className={styles.line}>
        <div>{`$`}</div>
        <div className={styles.cursorHighlight} />
      </div>
    </div>
  );
};
