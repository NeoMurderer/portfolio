import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';


export function Island({ scale = 1, ...props }) {
  const {camera} = useThree()
  const { nodes } = useGLTF('/meshes/island.glb');
  const ref = useRef();
  // Repeat mesh to create y * x grid
  const geometry = nodes['island'].geometry;
  const [hovered, hover] = useState(false);
  return (
    <mesh
      scale={scale}
      {...props}

      ref={ref}
      onClick={() => {
        console.info(camera)
        
         gsap.to(ref.current.rotation, { y: "+=0.1", repeat: -1, ease: 'none', repeatRefresh: true  })
         
         if(props.onClick) {
           props.onClick(camera)
         }
      }} 
      geometry={geometry}
      onPointerOver={(event) => {
        event.stopPropagation();
        hover(true)
      }}
      onPointerOut={(event) => hover(false)}>
      <meshPhysicalMaterial color={'green'} roughness={hovered ? 0 : 1} />
    </mesh>
  );
}
