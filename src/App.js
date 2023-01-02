import { useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
  
  const scrollTop = () => {
    try {
        window.scrollTo({left: 0, top: 0, behavior: "smooth"})
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {sidebarHandler(0)})
  document.body.style.background = '#fafafa';
  
  return (    
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={
      <div className="grid place-items-center h-screen">
          <Link to="/portfolio">
              <div className="h-fit w-fit p-4 active:shadow-2xl active:outline-2  active:outline-blue-600  active:outline  active:bg-blue-200 rounded-md shadow-md bg-blue-300">Access My Portfolio</div>
          </Link>
              </div>
    }/>

      
    <Route path="/portfolio" element={
      <div className="sm:flex sm:flex-row sm:py-0 pt-8 sm:overflow-y-auto h-full sm:h-screen">
        <button onClick={() => scrollTop()} className="fixed sm:hidden p-4 m-2  active:shadow-2xl  active:outline-2  active:outline-blue-600  active:outline  active:bg-blue-200  h-fit min-w-8 w-fit right-0 bottom-0 rounded-md shadow-md bg-blue-300"> 
          Scroll to top 
        </button>
        <div className="sm:min-w-[90px] sm:pl-8 sm:px-0 px-8 sm:py-8">
          <Sidebar  sidebarHandler={sidebarHandler} ></Sidebar>
        </div>
        <div className="sm:grow h-full sm:flex-col sm:overflow-y-auto justify-between snap-proximity snap-y px-8">
          {
            pages.map((page) => 
            <div key={pages.indexOf(page)} ref={el => ref.current[pages.indexOf(page)] = el} className={pages.indexOf(page)===0?"pt-8 mb-8 snap-start":"sm:my-8 mb-8 snap-center"}>
              {page}
            </div>)
          }
        </div>
      </div>
      } />

    <Route path="*" element={<div>404 NotFound</div>} />
    </Routes>
    </BrowserRouter>
  );
};


export default App;
