import { useRef } from "react";

import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./components/Projects";

const App = () => {

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  
  const scrollTo = (ref) => {
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
    });
  };

  const sidebarHandler = (id) => {
    switch (id) {
      case 0:
        try {scrollTo(homeRef);}
        catch (e) {
          console.log(e);
        }
        break;
      case 1:
        try {scrollTo(projectRef);}
        catch (e) {
          console.log(e);
        }
        break;
      default:
        break;
    }
  }


  return (    
  <div className="">
      <Sidebar sidebarHandler={sidebarHandler} ></Sidebar>
      <div className="absolute top-0 right-0 pl-8 pr-8 w-full-300 pb-8">
        <div ref={homeRef} className="pt-8">
            <AboutMe></AboutMe>
        </div>
        <div ref={projectRef} className="pt-8">
            <ProjectPage></ProjectPage>
        </div>
      </div>
    </div>
  );
};
document.body.style.background = '#fafafa';

export default App;
