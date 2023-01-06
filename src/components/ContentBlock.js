import CustomImg from './CustomImg';
import { Viewer } from '@react-pdf-viewer/core';
import { RiArrowDownSLine } from 'react-icons/ri';

import '@react-pdf-viewer/core/lib/styles/index.css';

const ContentBlock = (props) => {
    return (
        <div onClick={()=>{
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
        }} 
            className="transition ease-linear duration-100 bg-white px-4 py-2 mx-4 hover:scale-[1.01] shadow-sm mb-4 rounded-lg outline outline-1 hover:outline-2 hover:shadow-md hover:outline-gray-400 outline-gray-200 ">
            <div className='lg:flex lg:justify-between'>
                <div>
                    <p>{props.duration}</p>
                    <h2><li>{props.prjName}</li></h2>
                </div>
                <div className='flex flex-col justify-center'>
                    <button before={props.url} onClick={() => window.open(props.url)} className="py-3 transition ease-linear duration-300 before:content-['Access_Source_code'] xl:hover:before:content-[attr(before)] bg-gray-800 hover:bg-blue-600 xl:text-sm text-xs px-6 rounded-full text-gray-50 hover"></button>
                </div>
            </div>
            { 
                props.description?.map(para => <p key={props.description.indexOf(para)}>{para}</p>)
            }
            
            {!props.isMaximize[props.id] ?
                <div>
                    <div className='bg-gray-200 h-[1px]'></div>
                    <div className='flex justify-center'><RiArrowDownSLine className='w-8 h-8'/></div>
                </div>
                : <div>
                    {props.documentUri !== undefined && 
                        <div> 
                            <div className='flex justify-center'>
                            <div className='sm:h-[750px] h-[100vh] w-[1000px]  outline outline-2 outline-grey-400 mt-8 mb-2'>
                                <Viewer className="object-cover" fileUrl={props.documentUri}/>
                            </div> 
                            </div>
                            <p className="text-center mb-8">{props.documentDes}</p>
                        </div>}
                        {props.website !== undefined && 
                        <div> 
                        <div className='flex justify-center'>
                            <iframe
                                className='sm:h-[750px] h-[100vh] w-[1200px]  outline outline-2 outline-grey-400 mt-8 mb-2'
                                id="iFrameExample"
                                title="iFrame Example"
                                src={props.website}
                            />
                            </div>
                        <p className="text-center mb-8">{props.websiteDes}</p>
                        </div>}
                    { props.images !== undefined && props.images?.map((image) => <CustomImg key={props.images.indexOf(image)} src={image.src} alt={image.alt} description={image.des}></CustomImg>)}
                </div>}
        </div>
    )
}

export default ContentBlock;