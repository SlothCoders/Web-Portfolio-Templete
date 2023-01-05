import { useState } from 'react';

import ContentBlock from './ContentBlock';
const ProjectPage = () => {
    const [isMaximizeAll, setMaximizeAll] = useState(Array(5).fill(false)) 
    return (
       
        
            <div  className="w-full bg-white px-4 py-8 sm:min-h-card rounded-xl shadow-2xl outline outline-gray-300 outline-1">
                <div className='flex justify-between mb-2'>
                <h1 className="pl-4">PROJECT</h1>
                    <div>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(true))}} className="bg-gray-800 py-3 mr-1 hover:bg-blue-600 text-sm px-8 rounded-full text-gray-50 hover">{"Expand All"}</button>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(false))}} className="bg-gray-800 py-3 hover:bg-blue-600 text-sm px-8 rounded-full text-gray-50 hover">{"Close All"}</button>
                    </div>
                </div>
                
                <ol className="list-decimal list-inside">

                <ContentBlock 
                            id={0}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/Motion-Capture"
                            prjName="Motion Capture using Open CV and Open GL" 
                            duration="04/09/2022 – CURRENT" 
                            description={["Track human pose and render an animated model depending on user motion. There will be two software works in parallel and communicate through a data transfer protocol.",
                            "Technologies: Modern C++, Python, Dear Imgui, Concurrency, OpenCV, OpenGL, UDP.",
                            "My activities:",
                            "• Develop graphic rendering pipeline with material, lighting, model loader, PBR, Animation, and post-rendering process.",
                            "• Create multi-threading cross-platform application.",
                            "• Create protocol to transfer human pose data using UDP."]}
                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/Web-Portfolio/blob/main/img/opencv.jpeg?raw=true",
                                "alt":"OpenCV",
                                "des":"Motion Capture using OpenCV"
                            },
                            {
                                "src":"https://github.com/minhdangphuoc/Web-Portfolio/blob/main/img/OpenGL_Assimp_Animation.gif?raw=true",
                                "alt":"OpenGL Renderer",
                                "des":"Animation scene rendering"
                            }
                        ]}/>
                <ContentBlock
                            id={1}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/OpenGL-Renderer" 
                            prjName="OpenGL Renderer" 
                            duration="07/2022 – CURRENT" 
                            description={["A modern graphical rendering engine based on Modern C++, OpenGL API, GLFW and Dear ImGUI.",]}
                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/OpenGL-Renderer/raw/develop/screenshots/sphereandmodel.png?raw=true",
                                "alt":"Model Lighting",
                                "des":"Static Model Loading with Global Lighting System"
                            },
                        ]}/>

                <ContentBlock
                            id={2}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/MD-Vulkan-Renderer" 
                            prjName="Vulkan Renderer" 
                            duration="05/2022 – CURRENT" 
                            description={["A 3D graphical rendering application that draws Wavefront .obj file in real-time. Based on Vulkan API and GLFW.",]}
                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/MD-Vulkan-Renderer/raw/develop/img/model.gif",
                                "alt":"Model Viking room",
                                "des":"Viking room model by nigelgoh on (CC BY 4.0)."
                            },
                        ]}/>
                <ContentBlock
                            id={3}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/Covid-19-Tracking-and-News" 
                            prjName="Covid 19 Tracking and News - Android Application" 
                            duration="04/2022 – 04/2022" 
                            description={["A modern graphical rendering engine based on Modern C++, OpenGL API, GLFW and Dear ImGUI.",]}
                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/OpenGL-Renderer/raw/develop/screenshots/sphereandmodel.png?raw=true",
                                "alt":"Model Lighting",
                                "des":"Static Model Loading with Global Lighting System"
                            },
                        ]}/>

                </ol>
            </div>
    );

}

export default ProjectPage