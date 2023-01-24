import { useState } from 'react';

import ContentBlock from './ContentBlock';

const EducationPage  = () => {
    const [isMaximizeAll, setMaximizeAll] = useState(Array(10).fill(true)) 
    var counter=0;
    return (
            <div  className="w-full bg-white sm:p-8 p-4 sm:min-h-card rounded-xl shadow-xl outline outline-gray-300 outline-1">
                <div className='flex justify-between'>
                 <h1 className="mb-0">Education</h1>
                </div>
                
                <ol className="list-decimal list-inside">
                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            prjName="Tampere University of Applied Sciences" 
                            duration="8/2020 – Current | Tampere, Finland" 
                            description={
                                ["Bachelor of Applied Science - BEng, Computer",
                                "Software Engineering",
                                "Activities and societies: Game Academy",]}
                            />
                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            prjName="FPT University" 
                            duration="08/2019 –  05/2020 (Dropout) | Da Nang, Vietnam" 
                            description={[
                                "Awarded Full Scholarship for four-year study",
                               ]}
                            />
                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            prjName="Phan Chau Trinh Upper Secondary School" 
                            duration="08/2016 –  05/2019 | Da Nang, Vietnam" 
                            description={
                                ["Founder of Science and Engineeing Club",
                               ]}
                            />
                </ol>
            </div>
    );

}

export default EducationPage