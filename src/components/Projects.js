import { useState } from 'react';

import ContentBlock from './ContentBlock';
const ProjectPage = () => {
    const [isMaximizeAll, setMaximizeAll] = useState(Array(20).fill(true)) 
    var counter=0;
    return (
            <div  className="w-full bg-white sm:p-8 p-4 sm:min-h-card rounded-xl shadow-xl outline outline-gray-300 outline-1">
                <div className='md:flex md:justify-between items-center'>
                    <h1 className="">Projects</h1>
                    <div>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(true))}} className="md:ml-4 ml-0 transform duration-300 border-gray-800 font-semibold	 border-2 py-3 mr-1 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Expand All"}</button>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(false))}} className="ml-2 transform duration-300 border-gray-800 font-semibold border-2 py-3 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Collapse All"}</button>
                    </div>
                </div>
            
                <ol className="list-decimal list-inside">

                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/Motion-Capture"
                            prjName="Motion Capture using Open CV and Open GL" 
                            duration="04/09/2022 – Current" 
                            description={["Track human pose and render an animated model depending on user motion. There will be two software works in parallel and communicate through a data transfer protocol.",
                            "Technologies: Modern C++, Python, Dear Imgui, Concurrency, OpenCV, OpenGL, UDP.",
                            "My activities:",
                            "• Develop graphic rendering pipeline with material, lighting, model loader, PBR, Animation, and post-rendering process.",
                            "• Create multi-threading cross-platform application.",
                            "• Create protocol to transfer human pose data using UDP."]}
  
                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/Web-Portfolio/blob/main/assets/opencv.jpeg?raw=true",
                                "alt":"OpenCV",
                                "des":"Motion Capture using OpenCV"
                            },
                            {
                                "src":"https://github.com/minhdangphuoc/Web-Portfolio/blob/main/assets/OpenGL_Assimp_Animation.gif?raw=true",
                                "alt":"OpenGL Renderer",
                                "des":"Animation scene rendering"
                            }
                        ]}/>
                <ContentBlock
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/OpenGL-Renderer" 
                            prjName="OpenGL Renderer" 
                            duration="07/2022 – Current" 
                            description={["A modern graphical rendering engine based on Modern C++, OpenGL API, GLFW and Dear ImGUI.",]}
  
                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/OpenGL-Renderer/raw/develop/screenshots/sphereandmodel.png?raw=true",
                                "alt":"Model Lighting",
                                "des":"Static Model Loading with Global Lighting System"
                            },
                        ]}/>

                <ContentBlock
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/MD-Vulkan-Renderer" 
                            prjName="Vulkan Renderer" 
                            duration="05/2022 – Current" 
                            description={["A 3D graphical rendering application renders Wavefront .obj file in real-time. Based on Vulkan API and GLFW.",
                            "Technologies: Modern C++, Vulkan API, GLFW.",
                            ]}

                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/MD-Vulkan-Renderer/raw/develop/img/model.gif",
                                "alt":"Model Viking room",
                                "des":"Viking room model by nigelgoh on (CC BY 4.0)."
                            },]}
                        />
                <ContentBlock
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/Covid-19-Tracking-and-News" 
                            prjName="Covid 19 Tracking and News" 
                            duration="04/2022 – 04/2022" 
                            description={["Covid-19 is remaining an interesting topic to work with. By understanding personal needs, an application is made for updating news about covid-19 from any country.",]}
                            documentUri="https://raw.githubusercontent.com/minhdangphuoc/Web-Portfolio/a9ccf38de2fd7c58deb726475d5a6582b3e86982/res/Covid%20Tracking%20Application%20Doc.pdf"
                            documentDes="Project Diary"

                            />
                <ContentBlock
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/TailwindCSS-Todo-List" 
                            prjName="TailwindCSS Todo List" 
                            duration="11/2021 – 12/2021" 
                            description={[
                                "- Express backend generates random tasks from a REST API endpoint.",
                                "- ReactJS and TailwindCSS frontend with a simple TODO-app where initial tasks are fetched from the backend.",
                            ]}
                            website="https://minhdangphuoc.github.io/TailwindCSS-Todo-List/"
                            websiteDes="TailwindCSS-Todo-List"
                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/Web-Portfolio/blob/main/assets/todolist.png?raw=true",
                                "alt":"Todo List Screenshot",
                                "des":"TailwindCSS Todo List"
                            },]}
                        />
                <ContentBlock
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/Humi_Temp_Web" 
                            prjName="Weather dashboard" 
                            duration="11/2021 – 12/2021" 
                            description={[
                                "Website frontend is written by vanilla HTML, CSS, and Javascript with simple tables and graphs where real-time temperature and humidity values are fetched from the backend. ",
                            ]}
                            website="https://minhdangphuoc.github.io/Humi_Temp_Web/"
                            websiteDes="Humi_Temp_Web"
                            images={[]}
                        />
                </ol>
            </div>
    );

}

export default ProjectPage