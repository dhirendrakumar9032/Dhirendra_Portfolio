import React from "react";
import "./index.scss";

 interface BlogCardProps {
  title: string;
  description: string;
  readTime: string;
  imageUrl: string;
  url: string;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const { title, description, readTime, imageUrl, url } = props;
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
        <a href={url} target="_blank" rel="noreferrer">Click to read</a>
      </div>
    </div>
  );
};

export { BlogCard };
