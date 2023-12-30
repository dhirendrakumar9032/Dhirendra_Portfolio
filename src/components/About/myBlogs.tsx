import React from "react";
import "./index.scss";
import { BlogCardProps } from "./type";

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const { title, description, readTime, imageUrl } = props;
  return (
    <div className="blog-card">
      <div
        className="blog-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="blog-content">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
      </div>
      <div className="blog-read-time">
        <span>{readTime}</span>
      </div>
    </div>
  );
};

export { BlogCard };
