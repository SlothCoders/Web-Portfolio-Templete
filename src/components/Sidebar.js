import LazyLoad from "react-lazy-load";

const Sidebar = (props) => {

  return (
      <div
        className='h-full p-2 sm:max-w-[300px] text-center rounded-2xl bg-gray-900 flex flex-col'
      >
        <div className="flex h-fit">
          <LazyLoad className="w-full px-8 pt-8">
            <img className="rounded-full" src="https://avatars.githubusercontent.com/u/37279565"></img>
          </LazyLoad>
          
        </div>
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex justify-between">
              <p className="font-bold text-gray-200 text-[18px] ml-2">Minh Dang</p>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
      

          <div className="flex-1 max-h-full darkscrollbar overflow-y-auto">
            <div onClick={() => props.sidebarHandler(0)}
              className="p-2.5 mt-3 rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
              >
              <p   className="text-[15px] ml-2 text-gray-200 font-bold">About Me</p>
            </div>

            <div
              onClick={() => props.sidebarHandler(1)}
              className="p-2.5 mt-3  rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
              >
              <p className="text-[15px] ml-2 text-gray-200 font-bold">Projects</p>
            </div>

            <div
            onClick={() => props.sidebarHandler(2)}
            className="p-2.5 mt-3  rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
            >
              <p className="text-[15px] ml-2 text-gray-200 font-bold">Education</p>
            </div>

            <div
              onClick={() => props.sidebarHandler(3)}
              className="p-2.5 mt-3  rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
              >
              <p className="text-[15px] ml-2 text-gray-200 font-bold">Experience</p>
            </div>

            <div
              onClick={() => props.sidebarHandler(4)}
              className="p-2.5 mt-3  rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
              >
              <p className="text-[15px] ml-2 text-gray-200 font-bold">Education</p>
            </div>
            

            <div className="my-4 mx-4 bg-gray-600 h-[1px]"></div>

            <div
              onClick={() => props.sidebarHandler(5)}
              className="p-2.5 mt-3  rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
              >
                <p className="text-[15px] ml-2 text-gray-200 font-bold">Contact</p>
            </div>
          </div>
      </div>
    ); 
}

export default Sidebar;
