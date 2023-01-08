import { useState } from 'react';

import ContentBlock from './ContentBlock';

const LicensesAndCertsPage = () => {
    const [isMaximizeAll, setMaximizeAll] = useState(Array(10).fill(true)) 
    var counter=0;

    return (
        <div  className="w-full bg-white sm:p-8 p-4 sm:min-h-card rounded-xl shadow-xl outline outline-gray-300 outline-1">
                <div className='md:flex md:justify-between items-center'>
                <h1 className="mb-0">Licenses and certifications</h1>
                    <div>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(true))}} className="md:ml-4 ml-0 transform duration-300 border-gray-800 font-semibold	 border-2 py-3 mr-1 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Expand All"}</button>
                        <button onClick={()=>{setMaximizeAll(Array(5).fill(false))}} className="ml-2 transform duration-300 border-gray-800 font-semibold border-2 py-3 hover:bg-gray-800 xl:text-sm text-xs px-8 hover:shadow-md rounded-full text-gray-800 hover:text-gray-100 hover">{"Collapse All"}</button>
                    </div>
                </div>
                
                <ol className="list-decimal list-inside">
                    {/* Udemy logo
                        Learn the Vulkan API with C++Learn the Vulkan API with C++
                        UdemyUdemy
                        Issued Jul 2022 · No Expiration DateIssued Jul 2022 · No Expiration Date
                        Credential ID UC-38975b53-98a2-4aaa-a621-731fd3dc76d9 */}
                <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            prjName="Learn the Vulkan API with C++" 
                            duration="Issued Jul 2022 · No Expiration Date" 
                            description={
                                ["Udemy",
                                "Credential ID UC-38975b53-98a2-4aaa-a621-731fd3dc76d9",
                                "Credential URL: https://www.udemy.com/certificate/UC-38975b53-98a2-4aaa-a621-731fd3dc76d9/",
                            ]}
                            images={[{"src":"https://udemy-certificate.s3.amazonaws.com/image/UC-38975b53-98a2-4aaa-a621-731fd3dc76d9.jpg"}]}
                            />
                            {/* CCNA: Introduction to NetworksCCNA: Introduction to Networks
                            CiscoCisco
                            Issued Dec 2021 · No Expiration DateIssued Dec 2021 · No Expiration Date
                            Credential ID 2a71d5a0-8dcb-446f-bbca-a1e7864ce70f */}
                 <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            prjName="CCNA: Introduction to Networks" 
                            duration="Issued Dec 2021 · No Expiration Date" 
                            description={
                                ["Cisco",
                                "Credential ID 2a71d5a0-8dcb-446f-bbca-a1e7864ce70f",
                            "Credential URL: https://www.credly.com/badges/2a71d5a0-8dcb-446f-bbca-a1e7864ce70f/public_url",]}
                            />
                            {/* Udemy logo
                            Beginning C++ Programming - From Beginner to BeyondBeginning C++ Programming - From Beginner to Beyond
                            UdemyUdemy
                            Issued Nov 2021 · No Expiration DateIssued Nov 2021 · No Expiration Date
                            Credential ID UC-2fa899ca-2c80-4cf1-b076-dad5e9953c1c */}
                 <ContentBlock 
                            id={counter++}
                            isMaximize={isMaximizeAll}
                            setMaximizeAll={setMaximizeAll}
                            prjName="Beginning C++ Programming - From Beginner to Beyond" 
                            duration="Issued Nov 2021 · No Expiration Date" 
                            description={
                                ["Udemy",
                                "Credential ID UC-2fa899ca-2c80-4cf1-b076-dad5e9953c1c",
                                "Credential URL: https://www.udemy.com/certificate/UC-2fa899ca-2c80-4cf1-b076-dad5e9953c1c/",]}
                            images={[{"src":"https://udemy-certificate.s3.amazonaws.com/image/UC-2fa899ca-2c80-4cf1-b076-dad5e9953c1c.jpg"}]}
                            
                            />
                
                </ol>
            </div>
    );

}

export default LicensesAndCertsPage