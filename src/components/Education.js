import { useState } from 'react';

import ContentBlock from './ContentBlock';

const EducationPage  = () => {
    const [isMaximizeAll, setMaximizeAll] = useState(Array(10).fill(true)) 
    var counter=0;
    return (
            <div  className="w-full bg-white px-4 py-8 sm:min-h-card rounded-xl shadow-2xl outline outline-gray-300 outline-1">
                <div className='flex justify-between mb-2'>
                <h1 className="pl-4">Education</h1>
                    {/* <div>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(true))}} className="transform duration-300 border-gray-800 font-semibold	 border-2 py-3 mr-1 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Expand All"}</button>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(false))}} className="ml-2 mr-4 transform duration-300 border-gray-800 font-semibold border-2 py-3 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Collapse All"}</button>
                    </div> */}
                </div>
                
                <ol className="list-decimal list-inside">
                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            prjName="Tampere University of Applied Sciences" 
                            duration="8/2020 – Current | Tampere, Finland" 
                            description={
                                ["Bachelor of Applied Science - BASc, Computer",
                                "Software Engineering",
                                "• Created a graphic rendering pipeline and OBJ file loader written in C++. Used GLFW, and Vulkan API.",
                                "• Developed a data transferring method using Bluetooth LE to receive Euler-angle values from an absolute orientation sensor.",]}
                            />
                
                </ol>
            </div>
    );

}

export default EducationPage