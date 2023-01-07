import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

import { zoomPlugin } from '@react-pdf-viewer/zoom';
    
const PDFReader = ({uri}) => {
    const zoomPluginInstance = zoomPlugin();
    const getFilePluginInstance = getFilePlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
    const { DownloadButton } = getFilePluginInstance;
   
    return(
        <>
        {
        uri !== undefined &&
        <div className='h-[64vh] w-[64vw] max-w-full border-2 pb-1 border-gray-800 mt-8 mb-2'>
        <div className="h-full flex flex-col rounded-lg">
            <div className='flex p-2 justify-between border-2 bg-gray-100 border-gray-100 shadow-xs'>
                <DownloadButton />
                <div className='flex justify-center'>
                <ZoomOutButton />
                <ZoomPopover />
                <ZoomInButton />
                </div>
                <div></div>
            </div>
            <div className='flex overflow-hidden'>
                <Viewer fileUrl={uri} plugins={[zoomPluginInstance, getFilePluginInstance]} />
            </div>
        </div>
        </div> 
        }
        </>
    );
}

export default PDFReader