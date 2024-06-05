import * as THREE from 'three';

const CreateParticles = (props) => {

  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  const sprite = new THREE.TextureLoader().load('/images/disc.png');
  sprite.colorSpace = THREE.SRGBColorSpace;

  for (let i = 0; i < 10000; i++) {

    const x = 2000 * Math.random() - 1000;
    const y = 2000 * Math.random() - 1000;
    const z = 2000 * Math.random() - 1000;

    vertices.push(x, y, z);

  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({ size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true });
  material.color.setHSL(1, 0.3, 0.7, THREE.SRGBColorSpace);

  return (<mesh geometry={geometry}>
    <pointsMaterial attach="material" color={'#9c88ff'} size={2} sizeAttenuation={true} map={sprite} alphaTest={0.5} transparent={true} />
  </mesh>);
};
