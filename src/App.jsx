import { useState } from "react";
import Affirmative from "./components/Affirmative";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Works from "./components/Works";
import SkillCanvas from "./components/SkillCanvas";

function App() {
  return (
    <div
      className='bg-gray-900 min-h-screen scroll-smooth'
      style={{ fontFamily: "Poppins",overflowY:"hidden" }}>
      <Banner></Banner>
      <Works />
      <SkillCanvas />
      <Blog />
      <Affirmative />
    </div>
  );
}

export default App;
