import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { BlogCard } from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
const navigate=useNavigate()
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/v1/blog/all-blog");
      if (data?.success) {
        setBlogs(data?.blogs);
        console.log(blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);
  return blogs.length === 0 ? (
    "loading"
  ) : (
    
      <div className="flex items-center text-orange-600 gap-2 font-semibold flex-col p-4">
        <h1 className="text-3xl text-center py-2 ">BLOGS</h1>
        <div className="flex flex-col gap-4 items-center">
          {blogs.map((blog) => {
            const formattedDate = moment(blog.createdAt).format("DD/MM/YYYY");
            return (
              <BlogCard
                title={blog?.title}
                description={blog.description}
                postedOn={formattedDate}
                username={blog.user.username}
                key={blog._id}
              />
            );
          })}
        </div>
        <button  onClick={()=>navigate('/create-blog')} className="shadow-lg bg-gray-400 text-white w-[500px] p-1">Create a new blog</button>
      </div>
    
    
  );
};