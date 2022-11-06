import React from 'react';
import { Project } from './Project';

export const ProjectList = () => {
  return (
    <>
      <Project
        title="Alibi Technologies"
        description="Full stack developer of a video e-commerce platform. Developed an innovative white-label solution for adding product placements to video content with maximal integration."
        skills={['Typescript', 'React', 'Gatsby', 'Node', 'GraphQL', 'FusionAuth', 'Serverless', 'PostgreSQL', 'Gitlab CICD', 'AWS', 'Bash', 'Terraform']}
      />

      <Project
        title="Swift Continental"
        description="Principal developer of logistics and shipping web app. Features included shipping labels, order pickups, integrated tracking, and custom analytics."
        skills={['Typescript', 'React', 'Node', 'GraphQL', 'FusionAuth', 'Serverless', 'PostgreSQL', 'Gitlab CICD', 'AWS']}
        alignRight
      />

      <Project
        title="Marketplace App"
        description="Developed a full stack buy-and-sell web app as a personal project. Find deals in your city on a variety of items posted by other users."
        skills={['React', 'Redux', 'Bootstrap', 'Node', 'Axios', 'Express', 'MongoDB', 'Cloudinary']}
      />

      <Project
        title="Nearby Food App"
        description={`Developed What's Good Around Here as a personal project. It's a full stack web app to find nearby restaurants based on what you're craving.`}
        skills={['React', 'Redux', 'Node', 'Axios', 'Express', 'MongoDB', 'Mapbox']}
        alignRight
      />

      <Project
        title="Tools for a Safe Flight"
        description={`While at UTC Aerospace (now Collins Aerospace), I developed stress analysis tools for landing gear safety. When a plane has a hard landing, these tools are used to determine which parts of a landing gear have taken too much damage and must be replaced or refurbished before flying again.\n\nThese tools helped reduce turn-around time from incident to dispatch by roughly 75%.`}
        skills={['Visual Basic', 'Visual Studio', 'Desktop App', 'Stress Analysis']}
      />

      <Project
        title="DC Consulting"
        description={`I was a Process and Design Engineer (EIT), creating 2D and 3D layouts of large-scale food production facilities. Other responsibilities included website maintenance, 3D scanning sites, and production of promotional videos.`}
        skills={['AutoCAD', 'AutoDesk Inventor', 'AutoDesk Recap', 'DaVinci Resolve']}
        alignRight
      />
    </>
  );
};
