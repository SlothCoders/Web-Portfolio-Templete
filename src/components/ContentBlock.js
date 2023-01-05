import CustomImg from './CustomImg';
import DocViewer from "react-doc-viewer";

const ContentBlock = (props) => {
    // const [isMaximize,setMaximize] = useState(props.isMaximizeAll)
    
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
            <p>{props.duration}</p>
            <div className='flex justify-between'>
                <h2><li>{props.prjName}</li></h2>
                <button before={props.url} onClick={() => window.open(props.url)} className="transition ease-linear duration-300 before:content-['Access_Source_code'] xl:hover:before:content-[attr(before)] bg-gray-800 hover:bg-blue-600 xl:text-sm text-xs px-8 rounded-full text-gray-50 hover"></button>
            </div>
            { 
                props.description?.map(para => <p key={props.description.indexOf(para)}>{para}</p>)
            }
            
            {props.isMaximize[props.id]  === true &&
                 props.images?.map((image) => <CustomImg key={props.images.indexOf(image)} src={image.src} alt={image.alt} description={image.des}></CustomImg>)
            }
              {props.isMaximize[props.id]  === false &&
                <div>
                    <div className='bg-gray-200 h-[1px]'></div>
                    <p className='w-full text-center mt-4'>{"Click to expand this card"}</p>
                </div>
            }
        </div>
    )
}

export default ContentBlock;