import { BlogCard } from "./myBlogs";
import { blogData } from "../../utils/data";

const Blogs = () => {
  return (
    <div className="blog-main-container" id="blogs">
      <div className="heading-container">
        <h2 className="heading">My Blogs</h2>
        <span className="underline"></span>
      </div>
      <div className="my-blogs">
      {blogData.map((blog,index) => (
        <BlogCard key={index} {...blog} />
      ))}
      </div>
    </div>
  );
};

export { Blogs };
