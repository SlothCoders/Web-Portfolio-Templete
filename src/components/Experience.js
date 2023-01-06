import { useState } from 'react';

import ContentBlock from './ContentBlock';

const ExperiencePage  = () => {
    const [isMaximizeAll, setMaximizeAll] = useState(Array(10).fill(true)) 
    var counter=0;
    return (
            <div  className="w-full bg-white px-4 py-8 sm:min-h-card rounded-xl shadow-2xl outline outline-gray-300 outline-1">
                <div className='flex justify-between mb-2'>
                <h1 className="pl-4">Experience</h1>
                    <div>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(true))}} className="bg-gray-800 py-3 mr-1 hover:bg-blue-600 xl:text-sm text-xs px-8 rounded-full text-gray-50 hover">{"Expand All"}</button>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(false))}} className="bg-gray-800 py-3 hover:bg-blue-600 xl:text-sm text-xs px-8 rounded-full text-gray-50 hover">{"Close All"}</button>
                    </div>
                </div>
                
                <ol className="list-decimal list-inside">
                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/Motion-Capture"
                            prjName="Computer Graphic And Ble Developer, Summer Trainee" 
                            duration="04/09/2022 – CURRENT" 
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
                </ol>
            </div>
    );

}

export default ExperiencePage