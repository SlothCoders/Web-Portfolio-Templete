import ContentBlock from './ContentBlock';
const ProjectPage = () => {
    return (
       
        
            <div  className="w-full bg-white px-4 py-8 sm:min-h-card rounded-xl shadow-2xl outline outline-gray-300 outline-1">
                <h1 className="pl-4">PROJECT</h1>
                <ol className="list-decimal list-inside">

                <ContentBlock 
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
                                "src":"https://github.com/minhdangphuoc/Web-Portfolio/blob/main/img/opencv.jpg",
                                "alt":"OpenCV",
                                "des":"Motion Capture using OpenCV"
                            },
                            {
                                "src":"",
                                "alt":"",
                                "des":""
                            }
                        ]}/>
                <ContentBlock 
                            prjName="Motion Capture using Open CV and Open GL" 
                            duration="04/09/2022 – CURRENT" 
                            description={["A modern graphical rendering engine based on Modern C++, OpenGL API, GLFW and Dear ImGUI.",]}
                            images={[
                            {
                                "src":"https://github.com/minhdangphuoc/OpenGL-Renderer/raw/develop/screenshots/sphereandmodel.png?raw=true",
                                "alt":"Model Lighting",
                                "des":"Static Model Loading with Global Lighting System"
                            },
                            {
                                "src":"https://github.com/minhdangphuoc/OpenGL-Renderer/blob/develop/screenshots/Animation.gif?raw=true",
                                "alt":"Assimp Animation",
                                "des":"Rendering model with Assimp Animation"
                            },
                        ]}/>
                </ol>
            </div>
    );

}

export default ProjectPage