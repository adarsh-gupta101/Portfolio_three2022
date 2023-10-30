import React, { useEffect } from "react";
import xri from "/assets/Clients/xri.jpg";
import ma2grg from "/assets/Clients/ma2grg.jpg";
import mages from "/assets/Clients/mages.jpg";
import three from "/assets/Clients/three.jpg";
import trend from "/assets/Clients/trend.jpg";
import Victual from "/assets/Clients/victual.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "./Blog";

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

const particleTexture = textureLoader.load("/assets/particles/9.png");

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

scene.background = new THREE.Color("black");

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
  particles.rotation.y = elapsedTime * 0.28 * mouse.y;
  particles.rotation.x = elapsedTime * 0.28  * mouse.x;
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
}

const dataForWork = [
  {
    title: "Mages Studio",
    description:
      "Mages Studio is an India-based design agency that has clients around the globe. Their creative minds unite to churn out designs that are the perfect amalgamation of class and allure leaving our clients wanting more.",
    image: mages,
    link: "https://dub.sh/mages-studio",
  },
  {
    title: "Mathew George's Portfolio",
    description:
      "Mathew is an engineer turned designer trying to bridge the gap between branding and interface design with 4 years of experience in digital design. He is also the co-founder of Mages Studio Pvt. Ltd.",
    image: ma2grg,
    link: "https://ma2grg.vercel.app/",
  },
  {
    title: "TrendOnline",
    description:
      "Trendonline Digital stand as one of the young dynamic Software development companies in Harare for over 5 years now.",
    image: trend,
    link: "https://trendonline.co.zw/",
  },
  {
    title: "XRI Africa",
    description:
      "Expert Research Insights (XRI) Private Limited was established in 2014 as a market research agency with expertise in both Quantitative and Qualitative research. ",
    image: xri,
    link: "https://www.xri-africa.com/",
  },
  {
    title: "Victual",
    description:
      "Victual is a food delivery app that allows you to order food from your favorite restaurants and have it delivered to your doorstep.",
    image: Victual,
    link: "https://shef-client.vercel.app/",
  },
  {
    title: "Universe inside browser",
    description:
      "Three.JS based visual experience of the universe- the solar system. A simple side project to understand WebGL and digging deeper into it",
    image: "../assets/clients/xri.jpg",
    link: "https://startling-entremet-4cf784.netlify.app/",
    image: three,
  },
];

function Works() {
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width / 1, sizes.height / 1);
  })
  return (
    

      <div className=' min-h-fit top-8 text-white mt-16'>
        <h2 className='text-blue-400 font-bold flex text-5xl md:text-7xl m-2 p-2'>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            M
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            Y
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            {" "}
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            P
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            O
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            R
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            T
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            F
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            O
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            L
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            I
          </p>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
            O
          </p>
        </h2>
        <p className='m-2 p-2 font-light '>
          A small gallery of projects that I have made. Got some opportunities
          to work with amazing people around the globe. I am always open to new
          opportunities. If you have any project in mind, feel free to contact
          me.
        </p>
        <article className='grid md:grid-cols-3 m-2 p-4 gap-4'>
          {dataForWork.map((Work,index) => {
            return (
              <div key={index}
                data-aos='fade-up-right'
                data-aos-duration='3000'
                className='rounded-lg hover:skew-x-1 hover:scale-105 hover:hue-rotate-180	 hue-rotate-0	 shadow-lg h-fit shadow-blue-300 m-2 p-2 hover:shadow hover:rotate-3 rotate-0 duration-200 ease-in-out hover:shadow-pink-300'>
                <div className='flex flex-col'>
                  <img src={Work.image} className='' />

                  <a
                    href={Work.link}
                    target='_blank'
                    rel='noreferrer'
                    className=''>
                    {" "}
                    <p className='text-xl mt-4'>{Work.title}</p>{" "}
                  </a>
                  <p className='text-sm font-light mt-2'>{Work.description}</p>
                  <button className='bg-blue-300 w-fit m-auto p-1  px-3 mt-2 rounded-xl shadow text-black'>
                    <a href={Work.link} target='_blank'>
                      {" "}
                      Check the site
                    </a>
                  </button>
                  <div className='flex items-center mt-4'>
                    {/* <img
                      src='https://pbs.twimg.com/profile_images/1505853495941169152/Gd3D-b_u_400x400.jpg'
                      className='rounded-full w-12 h-12 my-2'
                    /> */}
                    {/* <p className='mx-2 flex flex-col-reverse'>
                      <span className='text-gray-200 text-sm'>{Work.time}</span>
                      Adarsh Gupta
                    </p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    
  );
}

export default Works;
