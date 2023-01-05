import CustomImg from './CustomImg';

const ContentBlock = (props) => {
    return (
        <div className="bg-white px-4 py-2 shadow-sm mb-2 rounded-xl outline outline-1 outline-gray-200 ">
            <h2><li>{props.prjName}</li></h2>
            {
                props.images.map((image) => <CustomImg src={image.src} alt={image.alt} description={image.des}></CustomImg>)
            }
        </div>
    )
}

export default ContentBlock;