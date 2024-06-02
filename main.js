import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 30;

renderer.render(scene, camera);

// const geometry = new THREE.DodecahedronGeometry(10, 0);
const radiusTop = 8;
const radiusBottom = 4;
const height = 16;
const radialSegments = 20;

const geometry = new THREE.CylinderGeometry(
  radiusTop,
  radiusBottom,
  height,
  radialSegments
);

const material = new THREE.MeshBasicMaterial({
  color: 0x0096ff,
  wireframe: true,
});

const shape = new THREE.Mesh(geometry, material);

scene.add(shape);

function animate() {
  requestAnimationFrame(animate);
  shape.rotation.x += 0.01;
  shape.rotation.y += 0.005;
  shape.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate();
