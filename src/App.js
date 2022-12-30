import { useRef } from "react";

import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./components/Projects";
import EducationPage from "./components/Education";
import ExperiencePage from "./components/Experience";
import SkillPage from "./components/Skills";
import ContactPage from "./components/ContactPage";

const App = () => {
  const ref = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]
  const pages = [<AboutMe/>, <ProjectPage/>, <EducationPage/>, <ExperiencePage/>, <SkillPage/>, <ContactPage/>]
  const scrollTo = (ref) => {
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
    });
  };

  const sidebarHandler = (id) => {
    try {scrollTo(ref[id]);}
    catch (e) {
      console.log(e);
    }
  }

  return (    
  <div className="">
      <Sidebar sidebarHandler={sidebarHandler} ></Sidebar>
      <div className="snap-y absolute right-0 pl-8 pr-8 w-full-300 pb-8">
        {
          pages.map((page) => 
          <div key={pages.indexOf(page)} ref={ref[pages.indexOf(page)]} className="pt-8 snap-center">
            {page}
          </div>)
        }
      </div>
  </div>
  );
};
document.body.style.background = '#fafafa';

export default App;
