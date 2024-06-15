const Navbar = () => {
  return (
    <nav className="bg-blue-500 border-gray-200">
      <div className="max-w-screen-xl mx-auto  flex flex-row justify-between">
        <div className="left-menu flex flex-row flex-1 text-white">
          <div className="p-3">
            <a href="" className="font-bold ">
              Bulog
            </a>
          </div>
          <a className="p-3 hover:bg-white hover:text-black" href="/dashboard">
            <span className="">
              Faktur Pajak Keluaran
            </span>
          </a>
          <a className="p-3 hover:bg-white hover:text-black" href="/data-orders" target="blank">
            <span className="">
                Data Order
            </span>
          </a>
        </div>
        <div className="right-menu text-white">
          <div className="p-3 hover:bg-white hover:text-black">
            <a href="" >Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
