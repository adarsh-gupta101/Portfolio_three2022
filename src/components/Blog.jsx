import React, { useEffect, useState } from "react";
import axios from "axios";
const dataForBlog = [
  {
    title: "How To Style And Write CSS In React",
    description:
      "React is an extensively preferred frontend UI library used in nearly 50 million projects every month. Backed by Facebook...",
    image:
      "https://www.lambdatest.com/blog/wp-content/uploads/2022/08/How-To-Style-And-Write-CSS-In-Re-1.png",
    time: "19 mins read",
    link:"https://www.lambdatest.com/blog/css-in-react/"
  },
  {
    title: "How to style using Tailwind CSS in React",
    description:
      "Many great libraries have been developed since the advent of CSS libraries and frameworks to make it easier for developers to create user-friendly interfaces. Though many of them...",
    image:
      "https://blog.talent500.co/wp-content/uploads/2022/10/Tips-to-style-tailwind-in-React.png",
    time: "14 mins read",
    link:"https://talent500.co/blog/how-to-style-using-tailwind-css-in-react/"
  },{
    title: "The Complete JavaScript Guide ",
    description:
      "JavaScript is a multi-paradigm, dynamic, high-level, loosely typed language. We use JavaScript to create...",
    image:
      "https://miro.medium.com/max/1400/0*Nx6ConKdgWZhakrQ",
    time: "8 mins read",
    link:"https://adarsh-gupta.medium.com/the-complete-javascript-guide-18319669dade"
  },{
    title: "Iam a Freelancer and I don't recommend it to anyone ",
    description:
      "I started earning money on my own through freelancing. I was a student at that time and I was earning money on my own. I was...",
    image:
      "https://miro.medium.com/max/640/1*964YOMP7ImVFlMZgKGiMiw.png",
    time: "9 mins read",
    link:"https://adarsh-gupta.medium.com/iam-a-freelancer-and-i-dont-recommend-it-to-anyone-c26606139896"
  },
  {
    title: "7 Github Repositories to Become a Pro JavaScript Developer ",
    description:"These repositories are so priceless, better than some courses out there I was...",
    image:
      "https://miro.medium.com/max/720/1*qKcOtgddtZ-jsCY4ARFZpg.jpeg",
    time: "5 mins read",
    link:"https://blog.bitsrc.io/7-github-repositories-to-become-a-pro-javascript-developer-8ce09c4f8950"
  }, {
    title: "The Complete Guide to TypeScript    ",
    description:"TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strict syntactical...",
    image:
      "https://miro.medium.com/max/720/1*1bpnC6xQR1Is3MEwpb1v-A.png",
    time: "5 mins read",
    link:"https://blog.bitsrc.io/complete-typescript-tutorial-717af7be8018"
  },
];

function Blog() {
  const [data, setmediumdata] = useState([]);

  useEffect(() => {
    // const fetchd = () => {
      axios
        .get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adarsh-gupta&api_key=hnzfdqelxnqgolluihzzdma4ot6xmskzdlf09uvq&count=10`
        )
        .then((res) => {
          setmediumdata(res.data);

        });
    // };
  
    // fetchd();
  }, []);
//   console.log(data)
  return (
    <div>
      <section className='text-white '>
      <h2 className='text-pink-400 font-bold flex text-5xl md:text-7xl m-2 p-2'>

        <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>W</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>R</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>I</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>T</p>
           <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>I</p>
            <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>N</p>
            <p className='hover:animate-bounce hover:translate-x-1	 duration-500 hover:skew-y-12	hover:scale-50 delay-100	'>G</p>

        </h2>
        <article className='flex flex-wrap justify-around'>
          {dataForBlog.map((blog) => {
            return (
              <div className='w-11/12 md:w-1/4 shadow-xl h-fit shadow-blue-300 m-2 p-2 hover:shadow-lg hover:rotate-3 rotate-0 duration-100 ease-in-out hover:shadow-pink-300'>
                <a href={blog.link} target="_blank" rel="noreferrer">
                <img src={blog.image} />
                <p className='text-xl mt-4'>{blog.title}</p>
                <p className='text-sm font-light'>{blog.description}</p>
                <div className='flex items-center mt-4'>
                  <img
                    src='https://pbs.twimg.com/profile_images/1505853495941169152/Gd3D-b_u_400x400.jpg'
                    className='rounded-full w-12 h-12 my-2'
                  />
                  <p className='mx-2 flex flex-col-reverse'>
                    <span className='text-gray-200 text-sm'>{blog.time}</span>
                    Adarsh Gupta
                  </p>
                </div>
                </a>
              </div>
            );
          })}
        </article>

        <a href="https://medium.com/@adarsh-gupta"><p className="text-center mt-28 border-2 border-pink-300 w-fit m-auto p-4 rounded-xl shadow-2xl shadow-blue-300">Check All of Adarsh Gupta's blog</p></a>
      </section>
    </div>
  );
}

export default Blog;
