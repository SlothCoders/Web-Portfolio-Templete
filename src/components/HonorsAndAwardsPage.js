import { useState } from 'react';

import ContentBlock from './ContentBlock';

const HonorsAndAwardsPage = () => {
    const [isMaximizeAll, setMaximizeAll] = useState(Array(10).fill(true)) 
    var counter=0;

    return (
        <div  className="w-full bg-white sm:p-8 p-4 sm:min-h-card rounded-xl shadow-xl outline outline-gray-300 outline-1">
                <div className='md:flex md:justify-between items-center'>
                <h1 className="mb-0">Honors and awards</h1>
                    <div className="flex flex-row">
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(true))}} className="md:ml-4 ml-0 transform duration-300 border-gray-800 font-semibold	 border-2 py-3 mr-1 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Expand All"}</button>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(false))}} className="ml-2 transform duration-300 border-gray-800 font-semibold border-2 py-3 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Collapse All"}</button>
                    </div>
                </div>
                
                <ol className="list-decimal list-inside">
                {/* 
                First Prize of Hult Prize Campus 2020First Prize of Hult Prize Campus 2020
                Issued by Hult Prize · Dec 2019Issued by Hult Prize · Dec 2019
                https://github.com/minhdangphuoc/My-Profile/blob/master/Certificates/HultPrizeCampus.pdf */}
                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            prjName="First Prize of Hult Prize Campus 2020" 
                            duration="Dec 2019" 
                            description={["Hult Prize",]}
                            documentUri="https://raw.githubusercontent.com/minhdangphuoc/My-Profile/master/Certificates/HultPrizeCampus.pdf"
                            />
                </ol>
            </div>
    );

}

export default HonorsAndAwardsPage