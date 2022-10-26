import React, { Suspense, useRef } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, FirstPersonControls, Stars } from '@react-three/drei';
// import { Box } from './components/Box';
import { Earth } from './components/Earth';
import { Sun } from './components/Sun';
import { Station } from './components/Station';

function App() {
  const pointLightRef = useRef<THREE.PointLight>(null!);
  const ambientLightRef = useRef<THREE.AmbientLight>(null!);
  const lights = [pointLightRef, ambientLightRef];
  return (
    <Canvas style={{ background: 'black' }} camera={{ near: 0.001 }}>
      <Suspense fallback={null}>
        {/* <Box /> */}
        <Earth lights={lights} />
        <Sun lights={lights} />
        <Station scale={10} rotation={[(Math.PI / 2) * 3, 0, (Math.PI / 4) * 3]} />
        <OrbitControls target={[0, 0, 0]} />
        {/* <FirstPersonControls /> */}

        {/* <gridHelper args={[1000, 100]}/> */}
        <ambientLight ref={ambientLightRef} intensity={0.1} />
        <pointLight ref={pointLightRef} intensity={10} position={[0, 0, 400]} />
        <Stars radius={300} />
      </Suspense>
    </Canvas>
  );
}

export default App;
