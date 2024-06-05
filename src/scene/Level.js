import { useGLTF } from '@react-three/drei';

export function Level({x = 5, y = 5, ...props}) {
  const { nodes } = useGLTF('/meshes/floor_001.glb');
  // Repeat mesh to create y * x grid
  const grid = [];
  const geometry = nodes.Cube.geometry;
  if ( ! geometry.boundingBox ) {
    geometry.computeBoundingBox();
  }
  const xSize = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
  // const ySize = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
  const zSize = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

  // Calculate object size
  const offset = 0.05;
  for (let i = -y/2; i < y/2; i++) {
    for (let j = -x/2; j < x/2; j++) {
      // Add offset radios to position
      const position = [
        j * (xSize + offset),
        0,
        i * (zSize + offset)
      ];
      
      grid.push(<mesh key={i * x + j} geometry={nodes.Cube.geometry}  material={nodes.Cube.material}  rotation={[0,i %2 ? Math.PI : 0,0]} position={position}>
        {/* <meshPhysicalMaterial roughness={0.5} color={'#A1662F'}></meshPhysicalMaterial> */}

      </mesh>);
    }
  }
  return <group>{grid}</group>;
}
