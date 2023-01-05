import LazyLoad from "react-lazy-load";

const CustomImg = (props) => {
    return(
        <>
            <LazyLoad className="flex justify-center">
                <img className="rounded-xl my-2 h-[50vh]" src={props.src}  alt={props.alt}/>
            </LazyLoad>
            <p className="text-center">{props.description}</p>
        </>
    );
}

export default CustomImg;

