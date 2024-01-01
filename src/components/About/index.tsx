import ExperienceSection from "./experience";
import {  educationEntries, selfDescription } from "../../utils/data";
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

    </div>
  );
};

export { About };
