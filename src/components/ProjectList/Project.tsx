import React from 'react';
import styles from './styles.module.css';

interface Props {
  alignRight?: boolean;
  title: string;
  description: string;
  skills: string[];
}

export const Project = ({ alignRight, title, description, skills }: Props) => {
  return (
    <div className={`${styles.container} ${alignRight ? styles.alignRight : ''}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>

      <ul className={styles.skillList}>
        {skills.map((skill, i) => (
          <li key={i} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
