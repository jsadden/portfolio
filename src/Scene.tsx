import React, { useRef } from 'react';
import './App.css';
import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { IconBox } from './components/IconBox';
import { isMobile, isMobilePortrait, isTablet } from './Responsive';

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

import alibitechIcon from './assets/alibitech.png';
import marketplaceAppIcon from './assets/marketplaceapp.png';
import foodAppIcon from './assets/foodapp.png';
import utcIcon from './assets/utc.png';
import dccIcon from './assets/dcconsult.png';

export const Scene = () => {
  const mobilePortrait = isMobilePortrait();
  const mobile = isMobile();
  const tablet = isTablet();
  const desktop = !mobilePortrait && !mobile && !tablet;

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
        <IconBox position={mobile ? { x: 0, y: -55, z: -30 } : { x: 7, y: -30, z: -30 }} color={'#fff'} imagePath={htmlIcon} />
        <IconBox position={mobile ? { x: 5, y: -65, z: -30 } : { x: 15, y: -30, z: -30 }} color={'#fff'} imagePath={reactIcon} />
        <IconBox position={mobile ? { x: -7, y: -65, z: -30 } : { x: 10, y: -40, z: -30 }} color={'#fff'} imagePath={jsIcon} />
        <IconBox position={mobile ? { x: -2, y: -60, z: -30 } : { x: 20, y: -35, z: -30 }} color={'#fff'} imagePath={tsIcon} />
        <IconBox position={mobile ? { x: 7, y: -60, z: -30 } : { x: 25, y: -30, z: -30 }} color={'#fff'} imagePath={cssIcon} />
        <IconBox position={mobile ? { x: -8, y: -57, z: -30 } : { x: 25, y: -40, z: -30 }} color={'#fff'} imagePath={reduxIcon} />
      </>

      <>
        <IconBox position={mobile ? { x: 0, y: -113, z: -30 } : { x: -15, y: -85, z: -30 }} color={'#fff'} imagePath={expressIcon} />
        <IconBox position={mobile ? { x: 5, y: -120, z: -30 } : { x: -15, y: -70, z: -30 }} color={'#fff'} imagePath={serverlessIcon} />
        <IconBox position={mobile ? { x: -9, y: -115, z: -30 } : { x: -5, y: -80, z: -30 }} color={'#fff'} imagePath={nodeIcon} />
        <IconBox position={mobile ? { x: 7, y: -113, z: -30 } : { x: -20, y: -75, z: -30 }} color={'#fff'} imagePath={graphqlIcon} />
        <IconBox position={mobile ? { x: -3, y: -120, z: -30 } : { x: -7, y: -70, z: -30 }} color={'#fff'} imagePath={psqlIcon} />
        <IconBox position={mobile ? { x: -7, y: -110, z: -30 } : { x: -25, y: -80, z: -30 }} color={'#fff'} imagePath={mongoIcon} />
      </>

      <>
        <IconBox position={mobile ? { x: 0, y: -155, z: -30 } : { x: 7, y: -105, z: -30 }} color={'#fff'} imagePath={stripeIcon} />
        <IconBox position={mobile ? { x: 5, y: -160, z: -30 } : { x: 15, y: -110, z: -30 }} color={'#fff'} imagePath={mapboxIcon} />
        <IconBox position={mobile ? { x: -5, y: -160, z: -30 } : { x: 10, y: -115, z: -30 }} color={'#fff'} imagePath={fusionauthIcon} />
        <IconBox position={mobile ? { x: 2, y: -165, z: -30 } : { x: 20, y: -120, z: -30 }} color={'#fff'} imagePath={cloudinaryIcon} />
        <IconBox position={mobile ? { x: -8, y: -168, z: -30 } : { x: 25, y: -115, z: -30 }} color={'#fff'} imagePath={googleIcon} />
      </>

      <>
        <IconBox position={mobile ? { x: 5, y: -200, z: -30 } : { x: -15, y: -150, z: -30 }} color={'#fff'} imagePath={terraformIcon} />
        <IconBox position={mobile ? { x: -7, y: -202, z: -30 } : { x: -5, y: -150, z: -30 }} color={'#fff'} imagePath={awsIcon} />
        <IconBox position={mobile ? { x: 2, y: -210, z: -30 } : { x: -20, y: -155, z: -30 }} color={'#fff'} imagePath={gitlabIcon} />
        <IconBox position={mobile ? { x: -3, y: -207, z: -30 } : { x: -5, y: -160, z: -30 }} color={'#fff'} imagePath={bashIcon} />
      </>
      <>
        <IconBox position={mobile ? { x: -5, y: -250, z: -30 } : { x: 7, y: -185, z: -30 }} color={'#fff'} imagePath={autocadIcon} />
        <IconBox position={mobile ? { x: 0, y: -245, z: -30 } : { x: 15, y: -180, z: -30 }} color={'#fff'} imagePath={matlabIcon} />
        <IconBox position={mobile ? { x: 5, y: -252, z: -30 } : { x: 10, y: -175, z: -30 }} color={'#fff'} imagePath={inventorIcon} />
      </>

      <IconBox
        size={{ length: 12, width: 12, height: 12 }}
        position={
          desktop ? { x: 25, y: -235, z: -35 } : tablet ? { x: 20, y: -240, z: -35 } : mobile ? { x: -7, y: -285, z: -35 } : { x: -10, y: -285, z: -35 }
        }
        angle={{ x: 0.1, y: 0.15, z: 0.1 }}
        color={'#fff'}
        imagePath={alibitechIcon}
      />

      <IconBox
        size={{ length: 12, width: 12, height: 12 }}
        position={
          desktop ? { x: -30, y: -290, z: -35 } : tablet ? { x: -20, y: -295, z: -35 } : mobile ? { x: 7, y: -355, z: -35 } : { x: 10, y: -355, z: -35 }
        }
        angle={{ x: 0.1, y: 0.15, z: 0.1 }}
        color={'#fff'}
        imagePath={marketplaceAppIcon}
      />

      <IconBox
        size={{ length: 12, width: 12, height: 12 }}
        position={desktop ? { x: 30, y: -335, z: -35 } : tablet ? { x: 20, y: -345, z: -35 } : mobile ? { x: -7, y: -415, z: -35 } : { x: -7, y: -415, z: -35 }}
        angle={{ x: 0.1, y: 0.15, z: 0.1 }}
        color={'#fff'}
        imagePath={foodAppIcon}
      />

      <IconBox
        size={{ length: 12, width: 12, height: 12 }}
        position={desktop ? { x: -30, y: -390, z: -35 } : tablet ? { x: -20, y: -405, z: -35 } : mobile ? { x: 8, y: -480, z: -35 } : { x: 8, y: -485, z: -35 }}
        angle={{ x: 0.1, y: 0.15, z: 0.1 }}
        color={'#fff'}
        imagePath={utcIcon}
      />

      <IconBox
        size={{ length: 12, width: 12, height: 12 }}
        position={desktop ? { x: 30, y: -435, z: -35 } : tablet ? { x: 20, y: -460, z: -35 } : mobile ? { x: -6, y: -555, z: -35 } : { x: 20, y: -460, z: -35 }}
        angle={{ x: 0.1, y: 0.15, z: 0.1 }}
        color={'#fff'}
        imagePath={dccIcon}
      />
    </>
  );
};
