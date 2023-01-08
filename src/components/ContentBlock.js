import CustomImg from './CustomImg';

import PDFReader from './pdfReader'

import { RiArrowDownSLine, RiCloseFill } from 'react-icons/ri';
import ReactPlayer from 'react-player'


import '@react-pdf-viewer/core/lib/styles/index.css';

const ContentBlock = (props) => {
    const clickToggle = () => {
        try
        {
            props.setMaximizeAll((prevState) => {
                let newState = prevState.slice(0);;
                newState[props.id] = !prevState[props.id];
                return newState;
            })
        }
        catch(e)
        {
            console.log(e)
        }
    }

    return (
        <div onClick={()=>{
            // if(props.isMaximize[props.id]===false)clickToggle()
        }} 
            className="transition ease-linear duration-100 bg-white p-4 hover:scale-[1.01] shadow-sm sm:mt-8 mt-2 rounded-lg outline outline-1 hover:outline-2 hover:shadow-md hover:outline-gray-400 outline-gray-200 ">
            
            <div className='lg:flex lg:justify-between'>
                <div>
                    <p>{props.duration}</p>
                    <h2><li>{props.prjName}</li></h2>
                </div>
                <div className='flex lg:justify-center'>
                    {
                        props.documentUri === undefined && props.website === undefined && props.images === undefined && props.videos === undefined 
                        ?   <></>                            
                        :<div className='flex flex-row sm:mb-0 mb-4 '> 
                            <div className='flex flex-col justify-center'>
                            {props.url!==undefined&& <button before={props.url} onClick={() => window.open(props.url)} className="transition mr-2 lg:py-4 py-3 h-[48px] ease-linear duration-300 before:content-['Access_Source_code'] xl:hover:before:content-[attr(before)] bg-gray-800 hover:bg-blue-600 xl:text-sm text-xs px-6 rounded-full text-gray-50"></button>}
                            </div>
                            <div className='flex flex-col justify-center'>

                            {props.isMaximize[props.id]===true
                                ?<button onClick={()=>{clickToggle()}} className="flex justify-center lg:p-4 p-3 bg-red-500 hover:bg-white hover:shadow-xl hover:outline hover:outline-2 hover:outline-red-500 h-[48px] w-[48px] rounded-full text-gray-50 hover:text-red-500"><RiCloseFill className='self-center'/></button>
                                :<button onClick={()=>{clickToggle()}} className="flex justify-center lg:p-4 p-3 bg-gray-500 hover:bg-white hover:shadow-xl hover:outline hover:outline-2 hover:outline-gray-500 h-[48px] w-[48px] rounded-full text-gray-50 hover:text-gray-500"><RiArrowDownSLine className='self-center'/></button>}
                            </div>
                        </div>
                    }
                </div>
            </div>
            { 
                props.description?.map(para => <p key={props.description.indexOf(para)}>{para}</p>)
            }
            {
            props.documentUri === undefined && props.website === undefined && props.images === undefined && props.videos === undefined 
            ? <></>
            : <>
                {!props.isMaximize[props.id] ?
                <div>
                <div className='bg-gray-200 h-[1px]'></div>
                <div className='flex justify-center'><RiArrowDownSLine className='w-8 h-8'/></div>
                </div>
                : <div>
                    <div> 
                            <div className='flex justify-center'>
                                <PDFReader uri={props.documentUri}></PDFReader>
                            </div>
                            <p className="text-center mb-8">{props.documentDes}</p>
                    </div>
                    {props.website !== undefined && 
                        <div> 
                        <div className='flex justify-center mt-8 mb-4 w-full h-fit'>
                            <div className='grow border-2 border-gray-60 w-full 0 p-4 rounded-lg bg-gray-900'>
                                <div className='grow flex justify-between w-full flex-wrap gap-y-2 items-center'>
                                    <p className='text-white mb-0 font-semibold text-ellipsis overflow-hidden'>{props.website}</p>
                                    <button onClick={() => window.open(props.website)} className="transition lg:py-4 py-3 h-[48px] ease-linear duration-100 before:content-['Visit_website'] bg-gray-700 hover:bg-gray-600 focus:outline outline-2 focus:outline-blue-600 xl:text-sm text-xs px-6 rounded-full text-white"></button>
                                </div>
                                <iframe
                                    className='h-[64vh] grow max-w-full  outline outline-2 outline-gray-600 mt-4 rounded-lg'
                                    id="iFrameExample"
                                    title="iFrame Example"
                                    width="100%"
                                    height="100%"
                                    src={props.website}
                                    />
                                </div>
                            </div>
                        <p className="text-center mb-8">{"Live Demo: " + props.websiteDes}</p>
                        </div>}
                        
                        <div className='flex justify-around flex-wrap items-end'>
                        {props.videos !== undefined &&
                            props.videos?.map((video) => <div key={props.videos.indexOf(video)}>
                                <div className="min-w-[32vw]">
                                    <div className="player-wrapper bg-gray-900 rounded-md">
                                        <ReactPlayer className="react-player rounded-md" muted={true} width="100%" height='100%' url={video.url} playing={true} loop={true}>
                                        </ReactPlayer>
                                    </div>
                                    <div className='flex justify-center'>
                                    <p className="text-center mb-8">{video.des}</p>
                                    </div>
                                </div>
                            </div>)}
                            </div>
                        <div className='flex justify-around flex-wrap items-end'>
                            { props.images !== undefined && props.images?.map((image) => <CustomImg key={props.images.indexOf(image)} src={image.src} alt={image.alt} description={image.des}></CustomImg>)}
                        </div>
                </div>}
            </>
            }
        </div>
    )
}

export default ContentBlock;