import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './Scene';
import { Content } from './components/Content';
function App() {
  return (
    <>
      <Content />
      <Canvas
        style={{
          background: '#22112b',
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: '0',
          left: '0',
          zIndex: -1,
        }}
        camera={{
          near: 0.1,
          far: 2000,
        }}
      >
        <Suspense fallback={null}>
          {/* <OrbitControls target={[0, 0, 0]} /> */}
          {/* <gridHelper args={[100, 100]}/> */}

          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
