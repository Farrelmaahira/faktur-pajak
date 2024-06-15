import Label from "../components/Label"
import Button from "../components/Button";
import Input from "../components/Input"
import { useState } from "react";
import axios from "axios";
function Login() {
  const [uname, setUname] = useState()
  const [pass, setPass] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="flex justify-center min-h-screen ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-auto bg-white">
        <div className="px-6 py-4">
          <h1 className="font-bold text-2xl text-center mb-2">
            Portal Akuntansi
          </h1>
          <form action="" method="post" onSubmit={handleSubmit}>
            <Label title="Username" name="username">
              Username
            </Label>
            <Input
              type="text"
              name="username"
              className="rounded w-full border p-1 "
              placeholder="John Doe"
              required="true"
              onChange={(e) => {
                setUname(e.target.value);
              }}
            ></Input>
            <Label title="Password" name="pass">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              className="rounded w-full border p-1"
              placeholder="****"
              onChange={(e) => setPass(e.target.value)}
            ></Input>
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
