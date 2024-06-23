import Button from "../components/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [uname, setUname] = useState()
  const [pass, setPass] = useState()
  const navigate = useNavigate()
  const url = import.meta.env.VITE_BASE_APP_URL

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      return navigate('/dashboard')
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = {
      username : uname,
      password : pass
    }
    const response = await axios.post(`${url}/api/v1/auth/login`, body)
    if(response.status == 200) {
      localStorage.setItem('token', response.data.token)
      return navigate('/dashboard')
    }
    
  }

  return (
    <div className="flex justify-center min-h-screen bg-slate-200 ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-auto bg-white">
        <div className="px-6 py-4">
          <h1 className="font-bold text-2xl text-center mb-2">
            Portal Akuntansi
          </h1>
          <form action="" method="post" onSubmit={handleSubmit}>
            <label title="Username" name="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="rounded w-full border p-1 "
              placeholder="John Doe"
              required
              onChange={(e) => {
                setUname(e.target.value);
              }}
            ></input>
            <label title="Password" name="pass">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="rounded w-full border p-1"
              placeholder="****"
              required
              onChange={(e) => setPass(e.target.value)}
            ></input>
            <Button
              type="submit"
              className="w-full rounded my-3 border p-2 bg-blue-500 text-white hover:bg-blue-900"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
