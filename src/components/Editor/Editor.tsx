import React from 'react';
import styles from './styles.module.css';

interface Props {
  entries: string[];
  title: string;
}

export const Editor = ({ title, entries }: Props) => {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.line}>
        <div className={styles.lineNumber}>1</div>
        <div className={styles.title}>
          <span className={styles.classHighlight}>{`class `}</span>
          {`${title} `}
          <span className={styles.bracketHighlight}>{`{`}</span>
        </div>
      </div>

      {entries.map((entry, i) => (
        <div key={i} className={styles.line}>
          <div className={styles.lineNumber}>{i + 2}</div>
          <div className={styles.entryText}>{entry}</div>
        </div>
      ))}

      <div className={styles.line}>
        <div className={styles.lineNumber}>{entries.length + 2}</div>
        <div className={styles.bracketHighlight}>{`}`}</div>
      </div>
    </div>
  );
};
