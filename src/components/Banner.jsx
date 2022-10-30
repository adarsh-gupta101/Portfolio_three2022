import React, { useEffect } from "react";
import * as THREE from "three";
// oribital controls
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

console.log(THREE);

// export default SkillCanvas;

// Canvas
let canvas;
console.log(canvas);

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111827);
// Texture
const textureLoader = new THREE.TextureLoader();

// Objects

// Materials

const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX / window.innerWidth - 0.5;
  mouse.y = -(event.clientY / window.innerHeight - 0.5);
});

const particleTexture = textureLoader.load("/src/assets/particles/9.png");

// particles
const particlesGeometry = new THREE.BufferGeometry();
const count = 5000;

const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
  colors[i] = Math.random();
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);
particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
// Material
const particlesMaterial = new THREE.PointsMaterial();

particlesMaterial.size = 0.1;
particlesMaterial.sizeAttenuation = true;

particlesMaterial.color = new THREE.Color("#ff88cc");

particlesMaterial.transparent = true;
particlesMaterial.alphaMap = particleTexture;
// particlesMaterial.alphaTest = 0.01
// particlesMaterial.depthTest = false
particlesMaterial.depthWrite = false;
particlesMaterial.blending = THREE.AdditiveBlending;

particlesMaterial.vertexColors = true;

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.9);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width / 1, sizes.height / 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
let controls;

/**
 * Renderer
 */
let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  //  particles cursor animation
  particles.rotation.y = elapsedTime * 0.28 * mouse.x * mouse.y;
  particles.rotation.x = elapsedTime * 0.28 * mouse.y * mouse.x;
  // particles.rotation.x = mouse.y

  particles.position.x = mouse.x - 0.5;
  particles.position.y = mouse.y - 0.5;

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

function Banner() {
  useEffect(() => {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width / 1, sizes.height / 1);

    // controls = new OrbitControls(camera, canvas);
    // controls.enableDamping = true;
  });
  return (
    <div className='relative min-h-screen'>
      <canvas
        className='webgl z-10   top-0 left-0 w-full h-full'
        ref={(mount) => (canvas = mount)}></canvas>

      <div className='flex flex-col absolute top-8 h-screen justify-center   items-start z-50'>
        <main className='text-3xl md:text-7xl text-white font-semibold p-4 '>
          <p>Hi,</p>
          <p>I'm Adarsh Gupta,</p>
          <p>Web & App Developer.</p>
        </main>
        <p className='text-gray-200 text-2xl p-4'>
          Full Stack JavaScript Developer
        </p>
      </div>
    </div>
  );
}

export default Banner;
