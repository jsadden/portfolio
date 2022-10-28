import React from 'react';
import styles from './styles.module.css';
import { Browser } from '../Browser';
import { ServerRack } from '../ServerRack';
import { Editor } from '../Editor';
import { Terminal } from '../Terminal';

export const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>Hello,</div>
        <div className={styles.heroName}>I'm Jim.</div>

        <div className={styles.subHero}>And this a brief history of me.</div>
      </div>

      <div className={styles.skillsContainer}>
        <Browser title="Front-End" entries={['HTML', 'CSS & SASS', 'JavaScript', 'TypeScript', 'React', 'Redux']} />

        <ServerRack title="Back-End" entries={['Node', 'Express', 'Serverless', 'GraphQL', 'PostgreSQL', 'MongoDB']} />

        <Editor title="APIs" entries={['Stripe', 'Mapbox', 'FusionAuth', 'Cloudinary', 'Google Cloud Services']} />

        <Terminal title="Cloud & CICD" entries={['AWS', 'Terraform', 'Gitlab CICD', 'Bash']} />

        <Browser title="Engineering" entries={['MATLAB', 'AutoCAD', 'Autodesk Inventor']} />
      </div>
    </div>
  );
};
