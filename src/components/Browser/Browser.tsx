import React from 'react';
import styles from './styles.module.css';

interface Props {
  alignRight?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export const Browser = ({ children, alignRight }: Props) => {
  return (
    <div className={`${styles.browserContainer} ${alignRight ? styles.alignRight : ''}`}>
      <div className={styles.browserHeader} />
      <div className={styles.headerRed} />
      <div className={styles.headerYellow} />
      <div className={styles.headerGreen} />

      {children}
    </div>
  );
};
