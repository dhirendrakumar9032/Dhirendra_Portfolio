import ExperienceSection from "./experience";
import { BlogCard } from "./myBlogs";
import { blogData, educationEntries, selfDescription } from "./data";
import "./index.scss";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="heading-container">
        <h2 className="heading">About Me</h2>
        <span className="underline"></span>
      </div>
      <div className="about-main">
        <div className="about">
          <div className="about-logo"></div>
          <div className="about-description">
            {selfDescription}
          </div>
        </div>
        <ExperienceSection entries={educationEntries} />
      </div>
      <div className="blog-title">My Blogs</div>
      <div className="my-blogs">
        
        {blogData.map((blog) => (
          <BlogCard {...blog} />
        ))}
      </div>
    </div>
  );
};

export { About };
