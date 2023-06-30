import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialState = {
  title: "",
  description: "",
  image: "",
};
const CreateBlog = () => {
  const id = localStorage.getItem("userId");
  const [input, setInput] = useState(initialState);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!id) {
        alert("please login to create blog");
      }

      const { data } = await axios.post("/api/v1/blog/create-blog", {
        title: input.title,
        description: input.description,
        image: input.image,
        user: id,
      });
      if (data?.success) {
        alert("blog create");
        setInput(initialState);
        console.log(input);
        navigate("/blogs");
      } else {
        alert(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        className="mx-auto border w-3/4 md:w-[500px]  flex flex-col justify-center     items-center  shadow-lg mt-8 shadow-black gap-6 p-6"
        onSubmit={handleSubmit}
      >
        <p className="text-lg font-semibold text-orange-600">CREATE NEW BLOG</p>
        <input
          type="text"
          className="border border-gray-400 w-full h-9 rounded-md placeholder:text-sm placeholder:p-2"
          placeholder=" Title of the blog  "
          name="title"
          value={input.title}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <textarea
          placeholder="description"
          className="border border-gray-400 w-full h-14 rounded-md placeholder:text-sm placeholder:p-2"
          value={input.description}
          name="description"
          onChange={(e) => handleInputChange(e)}
          required
        ></textarea>

        <input
          type="text"
          className="border border-gray-400 w-full h-9 rounded-md placeholder:text-sm placeholder:p-2"
          placeholder="image url  "
          name="image"
          value={input.image}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <div className="flex flex-col gap-2 items-center  w-full">
          <button
            className="border bg-orange-600  font-semibold  text-white  p-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateBlog;
