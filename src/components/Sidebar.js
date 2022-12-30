const Sidebar = (props) => {
  return (
      <>
      <div
        className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 min-w-300 overflow-y-auto text-center rounded-2xl m-8 bg-gray-900'
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex justify-between">
            <p className="font-bold text-gray-200 text-[18px] ml-2">Minh Dang</p>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        
        <div onClick={() => props.sidebarHandler(0)}
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <p   className="text-[15px] ml-2 text-gray-200 font-bold">About Me</p>
        </div>

        <div
          onClick={() => props.sidebarHandler(1)}
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <p className="text-[15px] ml-2 text-gray-200 font-bold">Projects</p>
        </div>

        <div
        onClick={() => props.sidebarHandler(2)}
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <p className="text-[15px] ml-2 text-gray-200 font-bold">Education</p>
        </div>

        <div
          onClick={() => props.sidebarHandler(3)}
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <p className="text-[15px] ml-2 text-gray-200 font-bold">Experience</p>
        </div>

        <div
          onClick={() => props.sidebarHandler(4)}
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <p className="text-[15px] ml-2 text-gray-200 font-bold">Education</p>
        </div>
        

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <div
          onClick={() => props.sidebarHandler(5)}
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
            <p className="text-[15px] ml-2 text-gray-200 font-bold">Contact</p>
        </div>
      </div>
      </>
    ); 
}

export default Sidebar;
