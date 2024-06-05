import * as THREE from 'three';

var cylinderMesh = function (pointX, pointY) {
  // edge from X to Y
  var direction = new THREE.Vector3().subVectors(pointY, pointX);
  var geometry = new THREE.CylinderGeometry(0.5, 0.5, direction.length(), 6, 2);
  return { geometry, position: new THREE.Vector3().addVectors(pointX, direction.multiplyScalar(0.5)) };

};
