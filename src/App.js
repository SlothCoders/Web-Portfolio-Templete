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
  <div className="flex flex-row  h-screen">
      <div className="min-w-[90px] pl-8 py-8">
        <Sidebar  sidebarHandler={sidebarHandler} ></Sidebar>
      </div>
      <div className="grow h-full flex-col overflow-y-auto justify-between snap-proximity snap-y px-8 pb-4 ">
        {
          pages.map((page) => 
          <div key={pages.indexOf(page)} ref={el => ref.current[pages.indexOf(page)] = el} className={pages.indexOf(page)===0?"pt-8 mb-4 snap-center":"my-4 snap-center"}>
            {page}
          </div>)
        }
      </div>
  </div>
  );
};

document.body.style.background = '#fafafa';

export default App;
