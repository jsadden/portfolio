import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface Props {
  position: {
    x: number;
    y: number;
    z: number;
  };
  size?: {
    length: number;
    width: number;
    height: number;
  };
  color: string;
  imagePath?: string;
}

export const IconBox = ({ position, size, color, imagePath }: Props) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const initialAngle = Math.PI * 0.25 * Math.random();
  const randomOffset = Math.random();

  const imageMap = useLoader(TextureLoader, imagePath || '/favicon_small.png');

  // animate rocking motion
  useFrame(() => {
    const angleX = Math.sin(Date.now() * 0.002 + randomOffset) * Math.PI * 0.25 + initialAngle;
    const angleY = Math.sin(Date.now() * 0.0005 + randomOffset) * Math.PI * 0.15 + initialAngle;
    const angleZ = Math.sin(Date.now() * 0.001 + randomOffset) * Math.PI * 0.25 + initialAngle;

    mesh.current.rotation.z = angleZ;
    mesh.current.rotation.x = angleX;
    mesh.current.rotation.y = angleY;
  });

  return (
    <mesh ref={mesh} position={[position.x, position.y, position.z]}>
      <boxGeometry args={[size?.length || 3, size?.width || 3, size?.height || 3]} />
      <meshStandardMaterial color={color} map={imagePath ? imageMap : undefined} />
    </mesh>
  );
};
