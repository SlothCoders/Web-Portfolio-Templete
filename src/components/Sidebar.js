const Sidebar = (props) => {
    return (
        <>
        <div
          className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 min-w-300 overflow-y-auto text-center rounded-2xl m-8 bg-gray-900"
        >
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <h1 className="font-bold text-gray-200 text-[18px] ml-3">Minh Dang</h1>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          
          <div onClick={() => props.sidebarHandler(0)}
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <p   className="text-[15px] ml-4 text-gray-200 font-bold">About Me</p>
          </div>

          <div
            onClick={() => props.sidebarHandler(1)}
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <p className="text-[15px] ml-4 text-gray-200 font-bold">Projects</p>
          </div>

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Education</span>
          </div>

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Experience</span>
          </div>

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Education</span>
          </div>
          

          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Contact</span>
              <span className="text-sm rotate-180" id="arrow">
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
    
        </div>
        </>
      ); 
}

export default Sidebar;
