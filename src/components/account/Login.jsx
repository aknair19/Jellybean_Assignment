import React, { useState } from "react";
import { LOGIN_IMAGE_URL } from "../../constants";

const signupInitialValues = {
  username: "",
  password: "",
  "confirm-password": "",
};

const Login = () => {
  const [toggleUser, setToggleUser] = useState("logIn");
  const [signUp, setSignUp] = useState(signupInitialValues);
  const handleToggle = () => {
    toggleUser === "logIn" ? setToggleUser("signUp") : setToggleUser("logIn");
  };
  const handleInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  return toggleUser === "logIn" ? (
    <div className="mx-auto border w-96 flex flex-col justify-center items-center  shadow-lg mt-8 shadow-black gap-6 p-4">
      <img src={LOGIN_IMAGE_URL} alt="login" className="w-24  p-2" />
      <input
        type="text"
        className="border border-gray-400 w-3/4 h-8 rounded-md"
        placeholder="enter username  "
      />
      <input
        type="text"
        className="border border-gray-400 h-8  w-3/4 rounded-md"
        placeholder="enter password"
      />
      <div className="flex flex-col gap-2 items-center  w-3/4">
        <button className="border bg-orange-600  font-semibold  text-white h-8  w-full rounded-md">
          Login
        </button>

        <button
          href="#"
          className="text-blue-500"
          onClick={() => handleToggle()}
        >
          Don't have an account?{" "}
        </button>
      </div>
    </div>
  ) : (
    <div className="mx-auto border w-96 flex flex-col justify-center items-center  shadow-lg mt-8 shadow-black gap-6 p-4">
      <img src={LOGIN_IMAGE_URL} alt="login" className="w-24  p-2" />
      <input
        type="text"
        name="username"
        className="border border-gray-400 w-3/4 h-8 rounded-md"
        placeholder="enter username "
        onChange={(e) => handleInputChange(e)}
      />
      <input
        type="text"
        className="border border-gray-400 h-8  w-3/4 rounded-md"
        placeholder="enter password"
        name="password"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        type="text"
        className="border border-gray-400 h-8  w-3/4  rounded-md"
        placeholder="confirm password"
        name="confirm-password"
        onChange={(e) => handleInputChange(e)}
      />
      <div className="flex flex-col gap-2 items-center  w-3/4">
        <button className="border bg-orange-600  font-semibold  text-white h-8  w-full">
          Create an account
        </button>

        <button
          href="#"
          className="text-blue-500"
          onClick={() => handleToggle()}
        >
          Already have an account?{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
