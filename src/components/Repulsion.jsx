import React, { useEffect } from "react";
import * as THREE from "three";
import { distance, radians, map } from "../utils/helpers";
// oribital controls
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import * as dat from "dat.gui"

// Canvas
let canvas;

// const gui=new dat.GUI()

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("black");
// Texture
const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load("/assets/bil.png");
// Geometries

const Box = new THREE.BoxGeometry(0.5, 0.5, 0.5);
Box.rotateX=0
Box.rotateY=0
Box.rotateZ=0
const Cone = new THREE.ConeGeometry(.3, .5,32);
Cone.rotateX=0;
Cone.rotateY=0;
Cone.rotateZ=radians(-180);
const Torus = new THREE.TorusGeometry(.3,.12,30,200);
Torus.rotateX=radians(90);
Torus.rotateY=radians(0);
Torus.rotateZ=radians(0);
const Capsule=new THREE.CapsuleGeometry(.3,.3,32);
const DodecahedronGeometry=new THREE.DodecahedronGeometry(.3,0);
const IcosohedronGeometry = new THREE.IcosahedronGeometry(0.3, 0);
const OctahedronGeometry = new THREE.OctahedronGeometry(0.3, 0);
const TetrahedronGeometry = new THREE.TetrahedronGeometry(0.3, 0);
const TorusKnotGeometry = new THREE.TorusKnotGeometry(0.3, 0.1, 100, 16);



// scene.add(new THREE.Mesh(Box, new THREE.MeshBasicMaterial({ color: "#ff0000" })));

//ray caster
let raycaster = new THREE.Raycaster();
console.log(raycaster)
const gutter = { size: 1.4 };
const meshes = [];
const repulsion = 1;
const grid = { cols: 20, rows: 12 };
const geometries = [Box, Cone, Torus, Capsule, DodecahedronGeometry, IcosohedronGeometry, OctahedronGeometry, TetrahedronGeometry, TorusKnotGeometry];

const getRandomGeometry = () => {
  return geometries[Math.floor(Math.random() * Math.floor(geometries.length))];
};

// console.log(getRandomGeometry())
const getMesh = (geometry, material) => {
  const mesh = new THREE.Mesh(geometry, material);
  //   scene.add(mesh);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  return mesh;
};
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

///
// // create a basic 3D object to be used as a container for our grid elements so we can move all of them together
let groupMesh = new THREE.Group();
// console.log(groupMesh)

const meshParams = {
  color: "#ff00ff",
  metalness: 0.58,
  emissive: "#000000",
  roughness: 0.18,
};
// // we create our material outside the loop to keep it more performant
const material = new THREE.MeshPhysicalMaterial(meshParams);
// scene.add(new THREE.Mesh(Cone,material))
// let count =0;

// for (let row = 0; row < grid.rows; row++) {
//   meshes[row] = [];

//   for (let col = 0; col < grid.cols; col++) {

//     const geometry = getRandomGeometry();
//     const mesh = getMesh(geometry, material);
//     // mesh.position.x = (col - grid.cols / 2) * gutter.size;
//     // mesh.position.y = (row - grid.rows / 2) * gutter.size;
//     // mesh.position.z = 0;
//     mesh.position.set(col + col * gutter.size, 0, row + row * gutter.size);

//     mesh.rotation.x = Math.random() * Math.PI;
//     mesh.rotation.y = Math.random() * Math.PI;
//     mesh.rotation.z = Math.random() * Math.PI;
//     mesh.scale.x = Math.random() * 0.5 + 0.5;
//     mesh.scale.y = Math.random() * 0.5 + 0.5;
//     mesh.scale.z = Math.random() * 0.5 + 0.5;
//     meshes[row].push(mesh);
//     groupMesh.add(mesh);
//   }
// }

for (let row = 0; row < grid.rows; row++) {
  meshes[row] = [];

  for (let col = 0; col < grid.cols; col++) {
    // console.log(count++)
    const geometry = getRandomGeometry();
    // console.log(geometry,geometry.geom)
    const mesh = getMesh(geometry, material);
    // scene.add(new THREE.Mesh(geometry, new THREE.MeshNormalMaterial()));
    // torus

    mesh.position.set(col + col * gutter.size, 0, row + row * gutter.size);
    // mesh.rotation.x = geometry.rotationX;
    // mesh.rotation.y = geometry.rotationY;
    // mesh.rotation.z = geometry.rotationZ;
    scene.add(mesh);

    // store the initial rotation values of each element so we can animate back
    mesh.initialRotation = {
      x: mesh.rotation.x,
      y: mesh.rotation.y,
      z: mesh.rotation.z,
    };

    groupMesh.add(mesh);

    // store the element inside our array so we can get back when need to animate
    meshes[row][col] = mesh;
  }
}
// console.log(groupMesh)

//center on the X and Z our group mesh containing all the grid elements
const centerX = (grid.cols - 1 + (grid.cols - 1) * gutter.size) * 0.5;
const centerZ = (grid.rows - 1 + (grid.rows - 1) * gutter.size) * 0.5;
groupMesh.position.set(-centerX, 0, -centerZ);
// console.log(groupMesh);
scene.add(groupMesh);

// scene.add(meshes[0][0]);

///

// Add the parent object to the scene

// Materials

const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX / window.innerWidth *2- 1;
  mouse.y = -(event.clientY / window.innerHeight )*2+1;
});

//add a box
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#ff0000" })
);
// scene.add(box);
// Lights

const pointLight = new THREE.AmbientLight("#2900af", 0.9);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

const spotLight2 = new THREE.SpotLight( 0xff00ff );
spotLight2.position.set( 0, 20, 0 );

scene.add( spotLight2 );



const SpotLight = new THREE.SpotLight("#e000ff", 1, 1000);

SpotLight.position.set(0, 27, 0);
SpotLight.castShadow = true;

scene.add(SpotLight);

const Rectlight = new THREE.RectAreaLight("#0077ff", 1, 2000, 2000);

Rectlight.position.set(5, 50, 50);
Rectlight.lookAt(0, 0, 0);

scene.add(Rectlight);

// floor
const floorGeometry = new THREE.PlaneGeometry(100, 100);
const shadowMaterial = new THREE.ShadowMaterial();
shadowMaterial.opacity = 0.9;

const floorMesh = new THREE.Mesh(floorGeometry, shadowMaterial);
floorMesh.position.y = 0;
floorMesh.receiveShadow = true;
floorMesh.rotation.x = -Math.PI / 2;
scene.add(floorMesh);

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
const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 1,100);
camera.position.x = 20;
camera.position.y = 20;
camera.position.z = 32;
camera.rotateX = 40;




//add camera rotation to dat gui



scene.add(camera);

/**
 * Renderer
 */
let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Controls
let controls;
/**
 * Animate
 */


 const particleTexture = textureLoader.load("/assets/particles/9.png");

 // particles
 const particlesGeometry = new THREE.BufferGeometry();
 const count = 5000;
 
 const positions = new Float32Array(count * 3);
 const colors = new Float32Array(count * 3);
 
 for (let i = 0; i < count * 3; i++) {
   positions[i] = (Math.random() - 0.5) * 100;
   colors[i] = Math.random();
 }
 
 particlesGeometry.setAttribute(
   "position",
   new THREE.BufferAttribute(positions, 3)
 );
 particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
 // Material
 const particlesMaterial = new THREE.PointsMaterial();
 
 particlesMaterial.size = 0.3;
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

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects([floorMesh]);
//   console.log(intersects)

particles.rotation.y = elapsedTime * 0.28 * mouse.y;
particles.rotation.x = elapsedTime * 0.28  * mouse.x;
// particles.rotation.x = mouse.y

spotLight2.position.x=mouse.x

particles.position.x = mouse.x - 0.5;
particles.position.y = mouse.y - 0.5;
  if (intersects.length > 0) {
    // alert("sex")
    const { x, z } = intersects[0].point;
    for (let row = 0; row < grid.rows; row++) {
      for (let col = 0; col < grid.cols; col++) {
        const mesh = meshes[row][col];
        // const distance=mesh.position.distanceTo(intersects[0].point);
        // const {x,y,z}=mesh.position;
        // const {x:initialX,y:initialY,z:initialZ}=mesh.initialRotation;
        // mesh.rotation.x=initialX+distance*0.01;
        // mesh.rotation.y=initialY+distance*0.01;
        // mesh.rotation.z=initialZ+distance*0.01;
        const mouseDistance = distance(
          x,
          z,
          mesh.position.x + groupMesh.position.x,
          mesh.position.z + groupMesh.position.z
        );

        const maxPositionY = 10;
        const minPositionY = 0;
        const startDistance = 6;
        const endDistance = 0;
        const y = map(
          mouseDistance,
          startDistance,
          endDistance,
          minPositionY,
          maxPositionY
        );

        gsap.to(mesh.position, { y: y < 1 ? 1 : y }).duration(0.4);

        const scaleFactor = mesh.position.y / 2.5;
        const scale = scaleFactor < 1 ? 1 : scaleFactor;
        gsap
          .to(mesh.scale, {
            ease: Back.easeOut.config(1.7),
            x: scale,
            y: scale,
            z: scale,
          })
          .duration(0.4);



          gsap.to(mesh.rotation,  {
            ease: Back.easeOut.config(1.7),
            x: map(mesh.position.y, -1, 1, radians(45), mesh.initialRotation.x),
            z: map(mesh.position.y, -1, 1, radians(-90), mesh.initialRotation.z),
            y: map(mesh.position.y, -1, 1, radians(90), mesh.initialRotation.y),
          }).duration(0.7);
      }
    }
  }
  controls?.update()

  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

function Repulsion() {
  useEffect(() => {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width / 1, sizes.height / 1);

    controls = new OrbitControls(camera, canvas);
    // controls.enableDamping = true;

    // controls.enabled = false;
  });
  return (
    <div className=' min-h-screen'>
      <canvas
        className='webgl z-10   top-0 left-0 w-full h-full'
        ref={(mount) => (canvas = mount)}></canvas>


      <div className='flex flex-col absolute w-full top-8 h-screen justify-center items-center   z-50'>
        <main className='text-3xl  md:text-7xl text-white font-semibold p-4 '>
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

export default Repulsion;
