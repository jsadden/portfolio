import React from 'react';
import styles from './styles.module.css';
import { Browser } from '../Browser';
import { ServerRack } from '../ServerRack';
import { Editor } from '../Editor';
import { Terminal } from '../Terminal';
import { GraphPaper } from '../GraphPaper';
import { ProjectList } from '../ProjectList';
import { SocialLinks } from '../SocialLinks';

export const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>Hello,</div>
        <div className={styles.heroName}>I'm Jim.</div>
        <div className={styles.subHero}>And these are some of my skills.</div>
      </div>

      <div className={styles.skillsContainer}>
        <Browser title="Front-End" entries={['React', 'TypeScript & JavaScript', 'Redux', 'React Native & Expo', 'HTML & CSS', 'Vite']} />

        <ServerRack title="Back-End" entries={['Node', 'Express', 'Prisma', 'Serverless', 'GraphQL', 'PostgreSQL', 'MongoDB']} />

        <Editor title="APIs" entries={['Stripe', 'Mapbox', 'FusionAuth', 'Mailtrap', 'Cloudinary']} />

        <Terminal title="Cloud & CICD" entries={['AWS', 'Terraform', 'CloudFormation', 'Gitlab CICD', 'EAS', 'Bash']} />

        <GraphPaper title="Engineering" entries={['MATLAB', 'AutoCAD', 'Autodesk Inventor']} />
      </div>

      <div className={styles.subTitle}>And these are some of my experiences.</div>
      <ProjectList />

      <div className={styles.subTitle}>And these are some of my links.</div>
      <SocialLinks />
    </div>
  );
};
