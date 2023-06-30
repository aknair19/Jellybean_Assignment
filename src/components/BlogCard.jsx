import React from "react";

export const BlogCard = ({ title, username, postedOn, description }) => {
  return (
    <div className="flex flex-col  items-center p-2 border  rounded-xl   min-h-[300px]  w-[500px] shadow-xl gap-2 bg-gray-100 ">
      <div className="flex bg-gray-300 rounded-lg w-full p-2 gap-3">
        <div className="rounded-full bg-orange-600 text-white font-bold text-2xl p-2 px-4">
          {username?.substring(0,1)?.toUpperCase()||"USER"}
        </div>
        <div className="flex flex-col text-black text-sm justify-center">
          <p>{username.toUpperCase()}</p>
          <p>30 June 2023</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-gray-600">{title}</p>
        <p className="text-md text-black">{description}</p>
        <p className="text-sm">Click here to read complete article</p>
      </div>
    </div>
  );
};
