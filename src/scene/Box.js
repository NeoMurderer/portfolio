import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';


export function Box({ scale = 1, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={(clicked ? 1.5 : 1) * scale}
      onClick={() => click(!clicked)}
      onPointerOver={(event) => {
        event.stopPropagation();
        hover(true)
      }}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry />
      {/* <meshNormalMaterial></meshNormalMaterial> */}
      {/* <meshMatcapMaterial  /> */}
      <meshPhysicalMaterial color={0x0000ff} roughness={0.5} metalness={0} clearcoat={1} clearcoatRoughness={0.1}></meshPhysicalMaterial>
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
    </mesh>
  );
}
