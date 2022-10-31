import React, { useEffect } from "react";
import xri from "../assets/Clients/xri.jpg";
import ma2grg from "../assets/Clients/ma2grg.jpg";
import mages from "../assets/Clients/mages.jpg";
import threejs from "../assets/Clients/threejs.jpg";
import trend from "../assets/Clients/trend.jpg";
import Victual from "../assets/Clients/victual.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const dataForWork = [
  {
    title: "Mages Studio",
    description:
      "Mages Studio is an India-based design agency that has clients around the globe. Their creative minds unite to churn out designs that are the perfect amalgamation of class and allure leaving our clients wanting more.",
    image: mages,
    link: "https://www.mages.studio/",
  },
  {
    title: "Mathew George's Portfolio",
    description:
      "Mathew is an engineer turned designer trying to bridge the gap between branding and interface design with 4 years of experience in digital design. He is also the co-founder of Mages Studio Pvt. Ltd.",
    image: ma2grg,
    link: "https://www.ma2grg.com/",
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
    link: "https://www.victual.fr/",
  },
  {
    title: "Universe inside browser",
    description:
      "Three.JS based visual experience of the universe- the solar system. A simple side project to understand WebGL and digging deeper into it",
    image: "../assets/clients/xri.jpg",
    link: "https://startling-entremet-4cf784.netlify.app/",
    image: threejs,
  },
];

function Works() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <section className='text-white mt-16'>
        <h2 className='text-blue-400 font-bold flex text-7xl m-2 p-2'>
          <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>M</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>Y</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'> </p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>P</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>O</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>R</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>T</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>F</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>O</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>L</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>I</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>O</p>
        </h2>
        <p className='m-2 p-2 font-light '>
          A small gallery of projects that I have made. Got some opportunities
          to work with amazing people around the globe. I am always open to new
          opportunities. If you have any project in mind, feel free to contact
          me.
        </p>
        <article className='grid md:grid-cols-3 gap-4'>
          {dataForWork.map((Work) => {
            return (
              <div
                data-aos='zoom-up-right'
                data-aos-duration='3000'
                className=' hover:skew-x-1 hover:scale-105 hover:hue-rotate-180	 hue-rotate-0	 shadow-xl h-fit shadow-blue-300 m-2 p-2 hover:shadow-lg hover:rotate-3 rotate-0 duration-100 ease-in-out hover:shadow-pink-300'>
                <a
                  href={Work.link}
                  target='_blank'
                  rel='noreferrer'
                  className=''>
                  <div className='flex flex-col'>
                    <img src={Work.image} className='' />
                    <p className='text-xl mt-4'>{Work.title}</p>
                    <p className='text-sm font-light'>{Work.description}</p>
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
                </a>
              </div>
            );
          })}
        </article>
      </section>
    </div>
  );
}

export default Works;
