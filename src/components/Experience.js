import { useState } from 'react';

import ContentBlock from './ContentBlock';

const ExperiencePage  = () => {
    const [isMaximizeAll, setMaximizeAll] = useState(Array(10).fill(true)) 
    var counter=0;
    return (
            <div  className="w-full bg-white px-4 py-8 sm:min-h-card rounded-xl shadow-2xl outline outline-gray-300 outline-1">
                <div className='md:flex md:justify-between mb-2'>
                <h1 className="pl-4">Experience</h1>
                    <div>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(true))}} className="md:ml-0 ml-4 transform duration-300 border-gray-800 font-semibold	 border-2 py-3 mr-1 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Expand All"}</button>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(false))}} className="ml-2 mr-4 transform duration-300 border-gray-800 font-semibold border-2 py-3 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Collapse All"}</button>
                    </div>
                </div>
                
                <ol className="list-decimal list-inside">
                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            url="https://github.com/minhdangphuoc/BNO055-BLE-Vulkan"
                            prjName="Computer Graphic And Ble Developer" 
                            duration="04/02/2022 – 29/06/2022 | Tampere, Finland" 
                            description={
                                ["An application receives orientation value from a controller and responsively presents a 3D object based on the input data.",
                                "My activities:",
                                "• Created a graphic rendering pipeline and OBJ file loader written in C++. Used GLFW, and Vulkan API.",
                                "• Developed a data transferring method using Bluetooth LE to receive Euler-angle values from an absolute orientation sensor.",]}
  
                            videos={[
                            {
                                "url":"https://github.com/minhdangphuoc/BNO055-BLE-Vulkan/blob/main/img/BLE2DRotation.mp4?raw=true",
                                "des":"Rotate 2D model by controller"
                            },
                            {
                                "url":"https://github.com/minhdangphuoc/BNO055-BLE-Vulkan/blob/main/img/withcase.mp4?raw=true",
                                "des":"Rotate 3D model by controller"
                            },
                        ]}/>
                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            prjName="Hardware Developer" 
                            duration="07/05/2021 – 08/07/2021 | Tampere, Finland" 
                            description={["Track human pose and render an animated model depending on user motion. There will be two software works in parallel and communicate through a data transfer protocol.",
                            "Technologies: TinkerCad, 3D Printing, ESP32, Arduino",
                            "My activities:",
                            "• Created a programable device that collects data from BNO055 - absolute orientation sensor.",
                            ]}
  
                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/Web-Portfolio/blob/main/assets/3D%20design%20via%20TinkerCAD.png?raw=true",
                                "alt":"TinkerCAD Design",
                                "des":"3D design via TinkerCAD"
                            },
                            {
                                "src":"https://github.com/minhdangphuoc/Web-Portfolio/blob/main/assets/Controller.png?raw=true",
                                "alt":"Controller",
                                "des":"Controller with printed cover"
                            }
                        ]}/>
                </ol>
            </div>
    );

}

export default ExperiencePage