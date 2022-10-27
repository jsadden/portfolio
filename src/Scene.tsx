import React, { useRef } from 'react';
import './App.css';
import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { IconBox } from './components/IconBox';

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
      <pointLight ref={pointLightRef} intensity={5} position={[-100, 0, 150]} />
      <Stars radius={200} />

      <>
        <IconBox position={{ x: 7, y: -30, z: -30 }} color={'purple'} />
        <IconBox position={{ x: 0, y: -35, z: -30 }} color={'red'} />
        <IconBox position={{ x: 10, y: -40, z: -30 }} color={'yellow'} />
        <IconBox position={{ x: 20, y: -35, z: -30 }} color={'orange'} />
        <IconBox position={{ x: 25, y: -30, z: -30 }} color={'blue'} />
        <IconBox position={{ x: 35, y: -35, z: -30 }} color={'green'} />
      </>

      <>
        <IconBox position={{ x: -35, y: -70, z: -30 }} color={'yellow'} />
        <IconBox position={{ x: -15, y: -70, z: -30 }} color={'orange'} />
        <IconBox position={{ x: -5, y: -80, z: -30 }} color={'red'} />
        <IconBox position={{ x: -20, y: -75, z: -30 }} color={'purple'} />
        <IconBox position={{ x: -25, y: -80, z: -30 }} color={'green'} />
        <IconBox position={{ x: -40, y: -80, z: -30 }} color={'blue'} />
      </>

      <>
        <IconBox position={{ x: 7, y: -105, z: -30 }} color={'purple'} />
        <IconBox position={{ x: 0, y: -110, z: -30 }} color={'red'} />
        <IconBox position={{ x: 10, y: -115, z: -30 }} color={'yellow'} />
        <IconBox position={{ x: 20, y: -120, z: -30 }} color={'orange'} />
        <IconBox position={{ x: 25, y: -115, z: -30 }} color={'blue'} />
        <IconBox position={{ x: 35, y: -110, z: -30 }} color={'green'} />
      </>

      <>
        <IconBox position={{ x: -35, y: -150, z: -30 }} color={'yellow'} />
        <IconBox position={{ x: -15, y: -150, z: -30 }} color={'orange'} />
        <IconBox position={{ x: -5, y: -150, z: -30 }} color={'red'} />
        <IconBox position={{ x: -20, y: -155, z: -30 }} color={'purple'} />
        <IconBox position={{ x: -25, y: -160, z: -30 }} color={'green'} />
        <IconBox position={{ x: -40, y: -155, z: -30 }} color={'blue'} />
      </>
      <>
        <IconBox position={{ x: 7, y: -185, z: -30 }} color={'purple'} />
        <IconBox position={{ x: 0, y: -180, z: -30 }} color={'red'} />
        <IconBox position={{ x: 10, y: -175, z: -30 }} color={'yellow'} />
        <IconBox position={{ x: 20, y: -185, z: -30 }} color={'orange'} />
        <IconBox position={{ x: 25, y: -175, z: -30 }} color={'blue'} />
        <IconBox position={{ x: 35, y: -180, z: -30 }} color={'green'} />
      </>
    </>
  );
};
