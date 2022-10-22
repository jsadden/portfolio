import React, { useRef } from 'react';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';

interface Props {
  lights?: React.MutableRefObject<any>[];
}

export const Sun = ({ lights }: Props) => {
  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <>
      <EffectComposer>
        <SelectiveBloom selection={[mesh]} lights={lights || []} intensity={0.5} />
      </EffectComposer>

      <mesh ref={mesh} position={[0, 0, 450]}>
        <sphereGeometry args={[10, 10, 10]} />
        <meshLambertMaterial color={'white'} toneMapped={false} />
      </mesh>
    </>
  );
};
