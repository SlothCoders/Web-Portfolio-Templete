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

              
                </ol>
            </div>
    );

}

export default ExperiencePage