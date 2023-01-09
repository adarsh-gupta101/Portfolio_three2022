import { useState } from "react";
import Affirmative from "./components/Affirmative";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Works from "./components/Works";
import SkillCanvas from "./components/SkillCanvas";
import Findme from "./components/Findme";
import Repulsion from "./components/Repulsion";
import Socials from "./components/Socials";

function App() {
  return (
    <div
      className='bg-black min-h-screen scroll-smooth'
      style={{ fontFamily: "Poppins", overflowY: "hidden" }}>
      <Repulsion />
      {/* <Banner></Banner> */}


      <Works />
      <Socials/>
      <SkillCanvas />
      <Blog />
      <Findme />
      <Affirmative />
      
    </div>
  );
}

export default App;
