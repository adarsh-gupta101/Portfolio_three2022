import React from 'react'
import { Link } from 'react-router-dom';

const Talent500Data=[
    {
        imageLink: 'https://www.lambdatest.com/blog/wp-content/uploads/2021/04/image5-81.png',    
        title: '24 Best CSS Frameworks To Look Forward In 2023',
        category: 'Web Development',
        shortDescription: '',
        author: 'Adarsh M',
        publicationDate: 'June 21, 2023',
        viewCount: '230359 Views ',
        readTime: '42 Min Read\n',
        blogLink: 'https://www.lambdatest.com/blog/best-css-frameworks/'
      },
      {
        imageLink: 'https://www.lambdatest.com/blog/wp-content/uploads/2023/04/2320Best20CSS.png',
        title: '23 Best CSS Frameworks For React In 2023: A Comprehensive Overview',
        category: 'Web Development',
        shortDescription: '',
        author: 'Adarsh M',
        publicationDate: 'April 25, 2023',
        viewCount: '305943 Views ',
        readTime: '42 Min Read\n',
        blogLink: 'https://www.lambdatest.com/blog/best-css-frameworks-for-react/'
      },
      {
        imageLink: 'https://www.lambdatest.com/blog/wp-content/uploads/2023/03/unnamed252520-2525202023-03-15T174705.891.png',
        title: 'A Complete Guide to CSS Refactoring',
        category: 'LambdaTest Experiments',
        shortDescription: '',
        author: 'Adarsh M',
        publicationDate: 'March 15, 2023',
        viewCount: '158545 Views ',
        readTime: '51 Min Read\n',
        blogLink: 'https://www.lambdatest.com/blog/css-refactoring/'
      },
      {
        imageLink: 'https://www.lambdatest.com/blog/wp-content/uploads/2022/12/Migrating-Test-Automation-Suite-To-Cypress.png',
        title: 'Migrating Test Automation Suite To Cypress 10',
        category: 'Cypress Testing',
        shortDescription: '',
        author: 'Adarsh M',
        publicationDate: 'November 29, 2022',
        viewCount: '196556 Views ',
        readTime: '29 Min Read\n',
        blogLink: 'https://www.lambdatest.com/blog/cypress-10-migration/'
      },
      {
        imageLink: 'https://www.lambdatest.com/blog/wp-content/uploads/2022/11/How2520To2520Create2520Custom2520Menus2520with2520CSS2520Select.png',
        title: 'How To Create Custom Menus with CSS Select',
        category: 'LambdaTest Experiments',
        shortDescription: '',
        author: 'Adarsh M',
        publicationDate: 'November 25, 2022',
        viewCount: '35422 Views ',
        readTime: '24 Min Read\n',
        blogLink: 'https://www.lambdatest.com/blog/css-select/'
      },
      {
        imageLink: 'https://www.lambdatest.com/blog/wp-content/uploads/2022/08/How-To-Style-And-Write-CSS-In-Re-1-480x270.png',
        title: 'How To Style And Write CSS In React',
        category: 'LambdaTest Experiments',
        shortDescription: '',
        author: 'Adarsh M',
        publicationDate: 'August 12, 2022',
        viewCount: '31494 Views ',
        readTime: '21 Min Read\n',
        blogLink: 'https://www.lambdatest.com/blog/css-in-react/'
      },
    
    {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/10/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe-370x300.jpg',
        title: 'Getting started with LangChainJS',
        readTime: '11 min read',
        blogLink: 'https://talent500.co/blog/getting-started-with-langchainjs/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/10/GettyImages-1390013998-e1656427645552-370x200.webp',
        title: '21 Must-Try Public APIs for Developers',
        readTime: '10 min read',
        blogLink: 'https://talent500.co/blog/21-must-try-public-apis-for-developers/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/10/istockphoto-1224500457-612x612-1-370x300.jpg',
        title: 'Coding patterns for Technical interviews',
        readTime: '11 min read',
        blogLink: 'https://talent500.co/blog/coding-patterns-for-technical-interviews/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/09/pexels-designecologist-1779487-370x300.jpg',
        title: 'Framer Motion: An Introduction',
        readTime: '11 min read',
        blogLink: 'https://talent500.co/blog/introduction-to-framer-motion/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/08/pexels-cottonbro-studio-5474296-1-370x300.jpg',
        title: 'What exactly is WebSockets',
        readTime: '10 min read',
        blogLink: 'https://talent500.co/blog/what-exactly-is-websockets/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/08/128-370x300.png',        
        title: 'Harnessing Generative AI in DevOps: News, Strategies, And Outlook',
        readTime: '8 min read',
        blogLink: 'https://talent500.co/blog/harnessing-generative-ai-in-devops-news-strategies-and-outlook/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/07/56-370x300.png',
        title: 'Getting Started with TypeScript',
        readTime: '13 min read',
        blogLink: 'https://talent500.co/blog/getting-started-with-typescript/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/07/41-370x300.png',
        title: 'React JS Best Practices to follow in 2023',
        readTime: '12 min read',
        blogLink: 'https://talent500.co/blog/react-js-best-practices-to-follow-in-2023/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/06/8-Must-Try-Front-End-Frameworks-for-Modern-Web-Development-370x300.png',
        title: '8 Must-Try Front-End Frameworks for Modern Web Development',
        readTime: '14 min read',
        blogLink: 'https://talent500.co/blog/8-must-try-front-end-frameworks-for-modern-web-development/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/06/7-Surprising-CSS-Hacks-That-Will-Take-Your-Design-to-the-Next-Level-370x300.png',
        title: '7 Surprising CSS Hacks That Will Take Your Design to the Next Level',
        readTime: '11 min read',
        blogLink: 'https://talent500.co/blog/7-surprising-css-hacks-that-will-take-your-design-to-the-next-level/'
      },{
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/06/What-is-the-Difference-Between-Angular-JS-and-Node-JS-370x300.png',
        title: 'What is the Difference Between Angular JS and Node JS',
        readTime: '11 min read',
        blogLink: 'https://talent500.co/blog/what-is-the-difference-between-angular-js-and-node-js/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/05/Complete-Guide-to-Chart-370x300.png',
        title: 'Complete Guide to Chart',
        readTime: '14 min read',
        blogLink: 'https://talent500.co/blog/complete-guide-to-chart/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/04/New-Blog-Banners-87-370x300.png',
        title: 'Top Nodejs Frameworks to Try in 2023',
        readTime: '13 min read',
        blogLink: 'https://talent500.co/blog/top-nodejs-frameworks-to-try-in-2023/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/03/New-Blog-Banners-56-370x300.png',
        title: 'Getting started with React Native',
        readTime: '14 min read',
        blogLink: 'https://talent500.co/blog/getting-started-with-react-native/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/03/rubaitul-azad-HSACbYjZsqQ-unsplash-370x300.jpg',
        title: 'All you need to know about Docker',
        readTime: '16 min read',
        blogLink: 'https://talent500.co/blog/all-you-need-to-know-about-docker/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/02/rahul-mishra-JpF58ANavoc-unsplash-370x300.jpg',
        title: 'All You need to Know about Vue',
        readTime: '15 min read',
        blogLink: 'https://talent500.co/blog/all-you-need-to-know-about-vue/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/02/om-siva-prakash-7q-kE4SZzvQ-unsplash-370x300.jpg',
        title: 'Getting Started With OpenAI APIs',
        readTime: '15 min read',
        blogLink: 'https://talent500.co/blog/getting-started-with-openai-apis/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/02/New-Blog-Banners-28-370x300.png',
        title: 'Web Development: Today, and Tomorrow – From HTML to AI-Powered Websites',
        readTime: '15 min read',
        blogLink: 'https://talent500.co/blog/web-development-today-and-tomorrow-from-html-to-ai-powered-websites/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/02/New-Blog-Banners-16-370x300.png',
        title: 'Web Design Trends To Follow In 2023',
        readTime: '15 min read',
        blogLink: 'https://talent500.co/blog/web-design-trends-to-follow-in-2023/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/01/Revolutionizing-Software-Development-with-ChatGPT-370x300.png',
        title: 'Revolutionizing Software Development with ChatGPT',
        readTime: '13 min read',
        blogLink: 'https://talent500.co/blog/revolutionizing-software-development-with-chatgpt/'  
      },{
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/01/What-is-new-in-Next-JS-13-370x300.png',
        title: 'What is new in Next JS 13?',
        readTime: '12 min read',
        blogLink: 'https://talent500.co/blog/what-is-new-in-next-js-13/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2023/01/Skills-you-need-to-get-a-job-as-a-JavaScript-developer-1-370x300.png',
        title: 'Skills you need to get a job as a JavaScript developer',
        readTime: '13 min read',
        blogLink: 'https://talent500.co/blog/skills-you-need-to-get-a-job-as-a-javascript-developer/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2022/12/How-to-build-a-web-application-from-scratch-370x300.png',
        title: 'How to build a web application from scratch',
        readTime: '14 min read',
        blogLink: 'https://talent500.co/blog/how-to-build-a-web-application-from-scratch/'        
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2022/12/React-JS-interview-Question-370x300.png',
        title: 'Top 25+ React.js Interview Questions',
        readTime: '15 min read',
        blogLink: 'https://talent500.co/blog/top-25-react-js-interview-questions/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2022/12/How-and-when-to-use-the-CSS-_has-selector-370x300.png',
        title: 'How and when to use the CSS :has() selector',
        readTime: '8 min read',
        blogLink: 'https://talent500.co/blog/how-and-when-to-use-the-css-has-selector/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2022/10/Tips-to-style-tailwind-in-React-370x300.png',
        title: 'Master Tailwind CSS: Benefits, Configuration in React, and Responsive Design Techniques',
        readTime: '14 min read',
        blogLink: 'https://talent500.co/blog/how-to-style-using-tailwind-css-in-react/'
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2022/10/Getting-started-with-web-accessibility-in-Reactjs-370x300.png',
        title: 'Getting started with web accessibility in ReactJS',
        readTime: '13 min read',
        blogLink: 'https://talent500.co/blog/getting-started-with-web-accessibility-in-react-js/' 
      },
      {
        imageLink: 'https://blog.talent500.co/wp-content/uploads/2022/09/Talent-side-blog-banners-3-370x300.png',
        title: 'useEffect vs useLayoutEffect : Difference between React useLayoutEffect & useEffect',
        readTime: '12 min read',
        blogLink: 'https://talent500.co/blog/react-useeffect-v-s-uselayouteffect-hook-key-differences/'
      }
  ]

function Blogs() {
  return (
    <div
    className='bg-black min-h-screen scroll-smooth'
    style={{ fontFamily: "Poppins", overflowY: "hidden" }}>        <article className='flex flex-wrap justify-around'>

{Talent500Data.map((blog,index) => {
            return (
                // <Link to={blog.blogLink} target="_blank" rel="noreferrer">
              <Link to={blog.blogLink} target="_blank" rel="noreferrer" key={index} className='rounded-lg w-11/12 md:w-1/5 shadow-sm h-fit shadow-blue-300 m-2 p-2 hover:shadow-lg hover:rotate-3 rotate-0 duration-100 ease-in-out hover:shadow-pink-300'>
                <img src={blog.imageLink} />
                <a href={blog.link} target="_blank" rel="noreferrer">
    <p className='text-xl mt-4 text-blue-300 brightness-150'>{blog.title}</p>
                <p className='text-sm font-light'>{blog.description}</p>
                </a>
                <div className='flex items-center mt-4'>
                  <img
                    src='https://pbs.twimg.com/profile_images/1669350664529670146/eVKk-xyU_400x400.jpg'
                    className='rounded-full w-12 h-12 my-2'
                  />
                  <p className='mx-2 flex flex-col-reverse text-white'>
                    <span className='text-blue-100 text-sm'>{blog.readTime}</span>
                    Adarsh Gupta
                  </p>
                </div>
              {/* </div> */}
              </Link>
            );
          })}
      </article>
    </div>
  )
}

export default Blogs
