import CustomImg from './CustomImg';

const ContentBlock = (props) => {
    return (
        <div className="transition ease-in-out bg-white px-4 py-2 mx-4 hover:scale-[1.01] shadow-sm mb-4 rounded-lg outline outline-1 hover:outline-2 hover:shadow-md hover:outline-gray-400 outline-gray-200 ">
            <div className='flex justify-between'>
                <h2><li>{props.prjName}</li></h2>
                <p>{props.duration}</p>
            </div>
            { 
                props.description?.map(para => <p key={props.description.indexOf(para)}>{para}</p>)
            }
            {
                props.images?.map((image) => <CustomImg key={props.images.indexOf(image)} src={image.src} alt={image.alt} description={image.des}></CustomImg>)
            }
        </div>
    )
}

export default ContentBlock;