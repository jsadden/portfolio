import React, { useRef } from 'react';
import './App.css';
import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { IconBox } from './components/IconBox';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import jsIcon from './assets/jslogo.png';
import tsIcon from './assets/tslogo.png';
import reactIcon from './assets/react.png';
import reduxIcon from './assets/redux.png';

import nodeIcon from './assets/node.png';
import expressIcon from './assets/express.png';
import serverlessIcon from './assets/serverless.png';
import graphqlIcon from './assets/gql.png';
import psqlIcon from './assets/psql.png';
import mongoIcon from './assets/mongo.png';

import stripeIcon from './assets/stripe.png';
import mapboxIcon from './assets/mapbox.png';
import fusionauthIcon from './assets/fusionauth.png';
import cloudinaryIcon from './assets/cloudinary.png';
import googleIcon from './assets/google.png';

import awsIcon from './assets/aws.png';
import terraformIcon from './assets/terraform.png';
import gitlabIcon from './assets/gitlab.png';
import bashIcon from './assets/bash.png';

import matlabIcon from './assets/matlab.png';
import autocadIcon from './assets/autocad.png';
import inventorIcon from './assets/inventor.png';

export const Scene = () => {
  const pointLightRef = useRef<THREE.PointLight>(null!);
  const ambientLightRef = useRef<THREE.AmbientLight>(null!);

  useFrame((state) => {
    const currentPosition = 0;
    const top = document.documentElement.scrollTop;
    const newPosition = currentPosition - top * 0.1;
    state.camera.position.setY(newPosition);
  });

  return (
    <>
      <ambientLight ref={ambientLightRef} intensity={0.1} />
      <pointLight ref={pointLightRef} intensity={2} position={[-100, 0, 150]} />
      <Stars radius={800} factor={14} />

      <>
        <IconBox position={{ x: 7, y: -30, z: -30 }} color={'#fff'} imagePath={htmlIcon} />
        <IconBox position={{ x: 0, y: -35, z: -30 }} color={'#fff'} imagePath={reactIcon} />
        <IconBox position={{ x: 10, y: -40, z: -30 }} color={'#fff'} imagePath={jsIcon} />
        <IconBox position={{ x: 20, y: -35, z: -30 }} color={'#fff'} imagePath={tsIcon} />
        <IconBox position={{ x: 25, y: -30, z: -30 }} color={'#fff'} imagePath={cssIcon} />
        <IconBox position={{ x: 35, y: -35, z: -30 }} color={'#fff'} imagePath={reduxIcon} />
      </>

      <>
        <IconBox position={{ x: -35, y: -70, z: -30 }} color={'#fff'} imagePath={expressIcon} />
        <IconBox position={{ x: -15, y: -70, z: -30 }} color={'#fff'} imagePath={serverlessIcon} />
        <IconBox position={{ x: -5, y: -80, z: -30 }} color={'#fff'} imagePath={nodeIcon} />
        <IconBox position={{ x: -20, y: -75, z: -30 }} color={'#fff'} imagePath={graphqlIcon} />
        <IconBox position={{ x: -25, y: -80, z: -30 }} color={'#fff'} imagePath={psqlIcon} />
        <IconBox position={{ x: -40, y: -80, z: -30 }} color={'#fff'} imagePath={mongoIcon} />
      </>

      <>
        <IconBox position={{ x: 7, y: -105, z: -30 }} color={'#fff'} imagePath={stripeIcon} />
        <IconBox position={{ x: 0, y: -110, z: -30 }} color={'#fff'} imagePath={mapboxIcon} />
        <IconBox position={{ x: 10, y: -115, z: -30 }} color={'#fff'} imagePath={fusionauthIcon} />
        <IconBox position={{ x: 20, y: -120, z: -30 }} color={'#fff'} imagePath={cloudinaryIcon} />
        <IconBox position={{ x: 25, y: -115, z: -30 }} color={'#fff'} imagePath={googleIcon} />
      </>

      <>
        <IconBox position={{ x: -15, y: -150, z: -30 }} color={'#fff'} imagePath={terraformIcon} />
        <IconBox position={{ x: -5, y: -150, z: -30 }} color={'#fff'} imagePath={awsIcon} />
        <IconBox position={{ x: -20, y: -155, z: -30 }} color={'#fff'} imagePath={gitlabIcon} />
        <IconBox position={{ x: -25, y: -160, z: -30 }} color={'#fff'} imagePath={bashIcon} />
      </>
      <>
        <IconBox position={{ x: 7, y: -185, z: -30 }} color={'#fff'} imagePath={autocadIcon} />
        <IconBox position={{ x: 0, y: -180, z: -30 }} color={'#fff'} imagePath={matlabIcon} />
        <IconBox position={{ x: 10, y: -175, z: -30 }} color={'#fff'} imagePath={inventorIcon} />
      </>
    </>
  );
};
