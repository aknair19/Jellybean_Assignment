import React, { useState } from "react";
import { LOGIN_IMAGE_URL } from "../constants";
import { Link } from "react-router-dom";
const loginInitialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [loginInputValues, setLoginInputValues] = useState(loginInitialValues);

  const handleLoginInputChange = (e) => {
    setLoginInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginInputValues);
  };
  return (
    <form
      className="mx-auto border w-3/4 md:w-[400px]  flex flex-col justify-center items-center  shadow-lg mt-8 shadow-black gap-6 p-4"
      onSubmit={handleSubmit}
    >
      <img src={LOGIN_IMAGE_URL} alt="login" className="w-24  p-2" />
      <input
        type="text"
        className="border border-gray-400 w-full h-8 rounded-md"
        placeholder="enter username  "
        name="username"
        value={loginInputValues.username}
        onChange={(e) => handleLoginInputChange(e)}
      />
      <input
        type="password"
        className="border border-gray-400 h-8  w-full rounded-md"
        placeholder="enter password"
        name="password"
        value={loginInputValues.password}
        onChange={(e) => handleLoginInputChange(e)}
      />
      <div className="flex flex-col gap-2 items-center  w-full">
        <button className="border bg-orange-600  font-semibold  text-white h-8 w-full rounded-md">
          Login
        </button>

        <button href="#" className="text-blue-500">
          <Link to="/signup">Don't have an account?</Link>
        </button>
      </div>
    </form>
  );
};

export default Login;
