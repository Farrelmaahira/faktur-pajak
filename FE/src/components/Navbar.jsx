import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const url = import.meta.env.VITE_BASE_APP_URL

  const handleLogout = async () => {
    const response = await axios.post(`${url}/api/v1/auth/logout`, {}, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })

    if(response.status == 200) {
      localStorage.removeItem('token')
      return navigate('/')
    }
  }
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
            <a onClick={handleLogout} >Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
