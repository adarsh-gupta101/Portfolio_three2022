import React from "react";
import Discord from "/assets/social/Discord.png";
import Medium from "/assets/social/medium2.png";
import Github from "/assets/social/GitHub.png";
import Instagram from "/assets/social/Instagram.png";
import Linkedin from "/assets/social/LinkedIn.png";
import Twitter from "/assets/social/Twitter.png";
import Youtube from "/assets/social/Youtube.png";

function Socials() {
  const data = [
    {
      image: Github,
      link: "https://www.github.com/adarsh-gupta101",
      alt:`<a href="https://iconscout.com/3ds/github" target="_blank">GitHub 3D Illustration</a> by <a href="https://iconscout.com/contributors/iconscout" target="_blank">IconScout Store</a>`
  },
    {
      image: Discord,
      link: "https://discord.com/users/790832929663483916",
    },
    {
      image: Instagram,
      link: "https://www.instagram.com/developedbyadarsh",
    },
  
    {
      image: Linkedin,
      link: "https://www.linkedin.com/in/adarsh1gupta/",
    },
    {
      image: Twitter,
      link: "https://twitter.com/Adarsh____gupta/",
    },
    {
      image: Youtube,
      link: "https://www.youtube.com/c/AdarshGuptaa/",
    },
    {
      image: Medium,
      link: "https://medium.com/@adarsh-gupta",
    },
  ];
  return (
    <div className='text-white mt-16 '>
      <h2 className='text-blue-400 font-bold flex text-5xl md:text-7xl m-2 p-2'>
        <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
          F
        </p>
        <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
          I
        </p>
        <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
          N
        </p>
        <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
          D{" "}
        </p>
        <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
          {" "}
        </p>
        <p className='hover:animate-bounce text-pink-400 ml-2 hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
          {" "}
          M
        </p>
        <p className='hover:animate-bounce text-pink-400 hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>
          E
        </p>
      </h2>

      <div className='mt-12 flex flex-wrap justify-center items-center min-h-96'>
        {data.map((item) => {
          return (
            <div className='hover:bg-white m-2 rounded shadow-lg hover:shadow-blue-400 shadow-pink-400 duration-300 hover:-mt-6'>
              <a href={item.link}>
                <img
                  src={item.image}

                  alt={item.alt || "social"}
                  className='w-36 h-36 m-2 p-2 object-contain'
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Socials;
