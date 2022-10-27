import React from 'react';
import styles from './styles.module.css';
import { Browser } from '../Browser';

export const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>Hello,</div>
        <div className={styles.heroName}>I'm Jim.</div>

        <div className={styles.subHero}>And this a brief history of me.</div>
      </div>

      <div className={styles.skillsContainer}>
        <Browser>
          <div className={styles.skillTitle}>Front-End</div>
          <div className={styles.skillText}>HTML</div>
          <div className={styles.skillText}>CSS & SASS</div>
          <div className={styles.skillText}>JavaScript</div>
          <div className={styles.skillText}>Typescript</div>
          <div className={styles.skillText}>React</div>
          <div className={styles.skillText}>Redux</div>
        </Browser>

        <Browser alignRight>
          <div className={styles.skillTitle}>Back-End</div>
          <div className={styles.skillText}>Node</div>
          <div className={styles.skillText}>Express</div>
          <div className={styles.skillText}>Serverless</div>
          <div className={styles.skillText}>GraphQL</div>
          <div className={styles.skillText}>PostgreSQL</div>
          <div className={styles.skillText}>MongoDB</div>
        </Browser>

        <Browser>
          <div className={styles.skillTitle}>APIs</div>
          <div className={styles.skillText}>Stripe</div>
          <div className={styles.skillText}>Mapbox</div>
          <div className={styles.skillText}>FusionAuth</div>
          <div className={styles.skillText}>Cloudinary</div>
          <div className={styles.skillText}>Google Cloud Services</div>
        </Browser>

        <Browser alignRight>
          <div className={styles.skillTitle}>Cloud & CICD</div>
          <div className={styles.skillText}>AWS</div>
          <div className={styles.skillText}>Terraform</div>
          <div className={styles.skillText}>Gitlab CICD</div>
          <div>Bash</div>
        </Browser>

        <Browser>
          <div className={styles.skillTitle}>Engineering</div>
          <div className={styles.skillText}>MATLAB</div>
          <div className={styles.skillText}>AutoCAD</div>
          <div className={styles.skillText}>Autodesk Inventor</div>
        </Browser>
      </div>
    </div>
  );
};
