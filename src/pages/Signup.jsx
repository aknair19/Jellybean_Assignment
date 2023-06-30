import React, { useState } from "react";
import { LOGIN_IMAGE_URL } from "../constants";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const signupInitialValues = {
  username: "",
  email: "",
  password: "",
};

export const Signup = () => {
  const [signupInput, setSignupInput] = useState(signupInitialValues);
  const navigate = useNavigate();
  const handleSignupInputChange = (e) => {
    setSignupInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        username: signupInput.username,
        email: signupInput.email,
        password: signupInput.password,
      });
      if (data.success) {
        alert("user registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }

    
  };

  return (
    <form
      className="mx-auto border  w-3/4 md:w-[300px]   flex flex-col justify-center items-center  shadow-lg mt-8 shadow-black gap-6 p-4   "
      onSubmit={handleSubmit}
    >
      <img src={LOGIN_IMAGE_URL} alt="login" className="w-24  p-2" />
      <input
        type="text"
        name="username"
        className="border border-gray-400 w-full h-9 rounded-md placeholder:text-sm placeholder:p-2"
        placeholder="enter username"
        value={signupInput.username}
        onChange={(e) => handleSignupInputChange(e)}
      />
      <input
        type="email"
        className="border border-gray-400 h-9  w-full  rounded-md placeholder:text-sm placeholder:p-2"
        placeholder="enter email"
        name="email"
        value={signupInput.email}
        onChange={(e) => handleSignupInputChange(e)}
      />
      <input
        type="password"
        className="border border-gray-400 h-9  w-full rounded-md placeholder:text-sm placeholder:p-2"
        placeholder="enter password"
        name="password"
        value={signupInput.password}
        onChange={(e) => handleSignupInputChange(e)}
      />

      <div className="flex flex-col gap-2 items-center  w-full">
        <button className="border bg-orange-600  font-semibold  text-white h-9  w-full">
          Create an account
        </button>

        <button href="#" className="text-blue-500">
          <Link to="/login">Already have an account? </Link>
        </button>
      </div>
    </form>
  );
};
