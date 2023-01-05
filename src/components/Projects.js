import ContentBlock from './ContentBlock';
const ProjectPage = () => {
    return (
       
        
            <div  className="w-full bg-white p-8 sm:min-h-card rounded-2xl shadow-2xl outline outline-gray-300 outline-1">
                <h1 className="">PROJECT</h1>
                <ol className="list-decimal list-inside">

                <ContentBlock prjName="Motion Capture using Open CV and Open GL" images={[
                            {
                                "src":"",
                                "alt":"",
                                "des":""
                            },
                            {
                                "src":"",
                                "alt":"",
                                "des":""
                            }
                        ]}/>

                <ContentBlock prjName="Motion Capture using Open CV and Open GL" images={[
                    {
                        "src":"",
                        "alt":"",
                        "des":""
                            },
                            {
                                "src":"",
                                "alt":"",
                                "des":""
                            }
                        ]}/>
                </ol>
            </div>
    );

}

export default ProjectPage