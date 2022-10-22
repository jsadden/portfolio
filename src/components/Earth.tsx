import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import EarthDayMap from '../assets/earthDayMap.jpeg';
import EarthSpecularMap from '../assets/earthSpecularMap.jpeg';
import EarthCloudMap from '../assets/earthCloudMap.jpg';

import { TextureLoader } from 'three';

interface Props {
  lights?: React.MutableRefObject<any>[];
}

export const Earth = ({ lights }: Props) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const clouds = useRef<THREE.Mesh>(null!);

  const [dayMap, specularMap, cloudMap] = useLoader(TextureLoader, [EarthDayMap, EarthSpecularMap, EarthCloudMap]);

  useFrame(() => (mesh.current.rotation.y += 0.0001));
  useFrame(() => (clouds.current.rotation.y += 0.00012));

  return (
    <>
      <mesh ref={clouds} position={[260, 0, 0]}>
        <sphereGeometry args={[250.5, 250, 250]} />
        <meshPhongMaterial map={cloudMap} transparent={true} opacity={0.5} />
      </mesh>

      <EffectComposer>
        <SelectiveBloom selection={[mesh]} lights={lights || []} intensity={1} />
      </EffectComposer>

      <mesh ref={mesh} position={[260, 0, 0]}>
        <sphereGeometry args={[250, 250, 250]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={dayMap} toneMapped={false} />
      </mesh>
    </>
  );
};
