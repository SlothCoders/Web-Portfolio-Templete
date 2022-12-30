import { useRef } from "react";

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

  return (    
  <div className="flex flex-row">
      <div className="flex h-full flex-col overflow-y-auto justify-between snap-proximity snap-y absolute right-0 px-8 pb-4 w-full-300 ">
        {
          pages.map((page) => 
          <div key={pages.indexOf(page)} ref={el => ref.current[pages.indexOf(page)] = el} className={pages.indexOf(page)===0?"pt-8 mb-4 snap-center":"my-4 snap-center"}>
            {page}
          </div>)
        }
      </div>
      <div className="w-full h-screen p-8 top-0 bottom-0 left-0 right-0">
        <Sidebar  sidebarHandler={sidebarHandler} ></Sidebar>
      </div>
  </div>
  );
};

document.body.style.background = '#fafafa';

export default App;
