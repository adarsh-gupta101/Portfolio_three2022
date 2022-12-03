import React from "react";

function Affirmative() {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-white'>
      <p className='text-5xl md:text-7xl'>Get in Touch</p>
      <p className='font-light w-3/4 md:w-1/2 my-8'>
        {" "}
        Iam interested in doing new Freelance projects. I prefer having
        Long-term projects but yeah Iam open to all kind of works. Whether you
        have a question or just want to say hi, I’ll try my best to get back to
        you!
      </p>{" "}
      <a href="mailto:adarshofficalgupta@gmail.com">

      <button
        className='text-pink-300 shadow-sm duration-75 ease-in-out hover:bg-white hover:text-black hover:shadow-pink-300 shadow-blue-300 border-2 rounded p-4 w-fit  '
        name='Say Hello to me'>
        Say Hello to Me
      </button>
      </a>
    </div>
  );
}

export default Affirmative;
