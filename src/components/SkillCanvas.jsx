import React, { useEffect } from "react";
import * as THREE from "three";
// oribital controls
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

console.log(THREE);

// export default SkillCanvas;

// Canvas
let canvas;
// console.log(document.querySelector("canvas.webgl"));
console.log(canvas);

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#000");
// Texture
const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load("/assets/bil.png");

// Objects
const geometry = new THREE.BoxGeometry();

// Materials

const material = new THREE.MeshBasicMaterial({ doubleSided: true });
material.transparent = true;
material.doubleSided = true;

material.clipShadows = true;
material.clipIntersection = true;

material.map = normalTexture;

// get mouse position
const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX / window.innerWidth - 0.5;
  mouse.y = -(event.clientY / window.innerHeight - 0.5);
});

//material.color = new THREE.Color(0xffff00);

// Mesh
const sphere = new THREE.Mesh(geometry, material);
// geometry position helper
const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);
sphere.position.set(1.5, 0, 0);
sphere.scale.set(1.3, 1.3, 1.3);
scene.add(sphere);

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
  renderer.setSize(sizes.width / 2, sizes.height / 2);
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

  //wave animation
  // sphere.rotation.y = 0.5 * elapsedTime;
  // sphere.rotation.x = 0.5 * elapsedTime;
  // sphere.rotation.z = 0.5 * elapsedTime;

  //  animate with mouse movement

  sphere.position.y = 0.8 * mouse.y;
  sphere.position.x = 0.8 * mouse.x;

  // Update objects
  sphere.rotation.y = 0.5 * elapsedTime;
  sphere.rotation.x = 0.5 * elapsedTime;
  sphere.rotation.z = 0.5 * elapsedTime;

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
function SkillCanvas() {
  useEffect(() => {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width / 2, sizes.height / 2);

    controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
  });
  return (
    <div className='flex md:flex-row flex-col justify-center items-center p-2 m-2 min-h-screen'>
      <p className='text-pink-400 text-xl font-light'>
        I'm a full-stack developer who is always looking for new and innovative
        ways to solve problems.
        <span className="text-blue-400">
          I'm a quick learner and have a knack for picking up new technologies
          quickly.
        </span>{" "}
        I'm also a great communicator and enjoy working with others to get
        things done.
      </p>

      <canvas
        className='webgl bg-gray-900'
        ref={(mount) => (canvas = mount)}></canvas>
    </div>
  );
}

export default SkillCanvas;
