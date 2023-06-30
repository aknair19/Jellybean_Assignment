import axios from "axios";
import React, { useState, useEffect } from "react";
import { BlogCard } from "../components/BlogCard";
import moment from "moment";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const data = await axios.get(`/api/v1/blog/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
        console.log(blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  });
  console.log(blogs);

  return blogs.length === 0 ? (
    <p className="text-center text-3xl text-gray-400 py-4">No blogs has been created</p>
  ) : (
    <div className="flex text-orange-600 font-semibold flex-col p-4">
      <h1 className="text-3xl text-center py-2">MY BLOGS</h1>
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
    </div>
  );
};

export default UserBlogs;
