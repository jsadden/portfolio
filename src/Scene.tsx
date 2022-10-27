import React, { useRef } from 'react';
import './App.css';
import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

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
      <pointLight ref={pointLightRef} intensity={10} position={[0, 0, 400]} />
      <Stars radius={200} />
    </>
  );
};
