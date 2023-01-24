import { useState } from 'react';

import ContentBlock from './ContentBlock';

const ContactPage = () => {
    const [isMaximizeAll, setMaximizeAll] = useState(Array(10).fill(true)) 
    var counter=0;

    return (
        <div  className="w-full bg-white sm:p-8 p-4 sm:mb-8 mb-0 sm:min-h-card rounded-xl shadow-xl outline outline-gray-300 outline-1">
                <div className='flex justify-between'>
                    <h1 className="mb-0">Contacts</h1>
                </div>
                
                <ol className="list-inside">
                
                <ContentBlock 
                        id={counter++}
                        isMaximize={isMaximizeAll}
                        setMaximizeAll={setMaximizeAll}
                        prjName="Emails"
                        description={
                            ["- minhdangphuoc@outlook.com",
                            "- dangphuocminh1405@gmail.com",
                            ]}
                        />
                <ContentBlock 
                        id={counter++}
                        isMaximize={isMaximizeAll}
                        setMaximizeAll={setMaximizeAll}
                        prjName="Github Profile"
                        description={
                            ["- https://github.com/minhdangphuoc",
                            ]}
                        />
                <ContentBlock 
                        id={counter++}
                        isMaximize={isMaximizeAll}
                        setMaximizeAll={setMaximizeAll}
                        prjName="Linkedin Profile"
                        description={
                            ["- https://www.linkedin.com/in/minh-dang-phuoc",
                            ]}
                        />
                </ol>
            </div>
    );

}

export default ContactPage