import React from 'react';
import styles from './styles.module.css';

export const ErrorFallback = () => {
  return (
    <div className={styles.editorContainer}>
      <div>
        It looks like something went wrong trying to render the WebGL landscape. You're missing out on parts of the website. Enable WebGL to see it all.
      </div>
    </div>
  );
};
