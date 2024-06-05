const Sphere = (props) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshPhysicalMaterial color={'gold'} metalness={1} roughness={0.1} />
    </mesh>
  );
};
