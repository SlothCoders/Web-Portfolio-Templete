import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

const PDFReader = ({uri}) => {
    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
   
    return(
        <>
        {
        uri !== undefined &&
        <div className='h-[64vh] w-[64vw] max-w-full border-2 pb-1 border-gray-800 mt-8 mb-2'>
        <div className="h-full flex flex-col rounded-lg">
            <div className='flex justify-center p-2 border-2 bg-gray-100 border-gray-100 shadow-xs items-center'>
                <ZoomOutButton />
                <ZoomPopover />
                <ZoomInButton />
            </div>
            <div className='flex overflow-hidden'>
                <Viewer fileUrl={uri} plugins={[zoomPluginInstance]} />
            </div>
        </div>
            {/* <Viewer className="object-cover" fileUrl={props.documentUri} plugins={[zoomPluginInstance]}/> */}
        </div> 
        }
        </>
    );
}

export default PDFReader