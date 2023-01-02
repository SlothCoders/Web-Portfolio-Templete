import { useRef, useEffect } from "react";

import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./components/Projects";
import EducationPage from "./components/Education";
import ExperiencePage from "./components/Experience";
import SkillPage from "./components/Skills";
import ContactPage from "./components/ContactPage";

const App = () => {
  const pages = [<AboutMe/>, <ProjectPage/>, <EducationPage/>, <ExperiencePage/>, <SkillPage/>, <ContactPage/>]
  const ref = useRef(Array(pages.length).fill(null))
  const homeRef = useRef(null);
  
  
  const scrollTo = (current) => {
    current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  
  const sidebarHandler = (id) => {
    try {scrollTo(ref.current[id]);}
    catch (e) {
      console.log(e);
    }
  }
  
  const scrollTop = () => {
    try {
      homeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {sidebarHandler(0)})
  
  return (    
  <div className="flex sm:flex-row sm:py-0 py-8 flex-col overflow-y-auto h-screen">
    <button onClick={() => scrollTop()} className="sm:hidden p-4 m-2 hover:shadow-2xl hover:outline-2 hover:outline-blue-600 hover:outline hover:bg-blue-200 hover: h-fit min-w-8 w-fit right-0 bottom-0 absolute rounded-md shadow-md bg-blue-300"> 
      Scroll to top 
    </button>
    <div ref={homeRef} className="sm:min-w-[90px] sm:pl-8 sm:px-0 px-8 sm:py-8">
      <Sidebar  sidebarHandler={sidebarHandler} ></Sidebar>
    </div>
    <div className="sm:grow h-full sm:flex-col sm:overflow-y-auto justify-between snap-proximity snap-y px-8 pb-4">
      {
        pages.map((page) => 
        <div key={pages.indexOf(page)} ref={el => ref.current[pages.indexOf(page)] = el} className={pages.indexOf(page)===0?"pt-8 mb-8 snap-start":"sm:my-8 mb-8 snap-center"}>
          {page}
        </div>)
      }
    </div>
  </div>
  );
};

document.body.style.background = '#fafafa';

export default App;
