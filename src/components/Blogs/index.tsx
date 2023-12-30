import React from "react";
import { BlogCard } from "./myBlogs";
import { blogData } from "../About/data";

const Blogs = () => {
  return (
    <div className="blog-main-container" id="blogs">
      <div className="heading-container">
        <h2 className="heading">My Blogs</h2>
        <span className="underline"></span>
      </div>
      <div className="my-blogs">
      {blogData.map((blog) => (
        <BlogCard {...blog} />
      ))}
      </div>
    </div>
  );
};

export { Blogs };
