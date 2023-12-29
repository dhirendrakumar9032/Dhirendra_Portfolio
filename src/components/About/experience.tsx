import React from "react";
import "./index.scss";
import { ExperienceEntry } from "./type";

const ExperienceEntryComponent: React.FC<ExperienceEntry> = ({
  role,
  company,
  period,
  responsibilities,
}) => (
  <div className="experience-entry">
    <div className="timeline">
      <div className="timeline-dot" />
      <div className="timeline-line" />
    </div>
    <div className="content">
      <div className="role">{role}</div>
      <div className="period">{period}</div>
      <div className="company">{company}</div>
      <ul className="responsibility">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

interface ExperienceSectionProps {
  entries: ExperienceEntry[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ entries }) => (
  <div className="experience-section">
    <h2 className="section-title">Professional Experience</h2>
    {entries.map((entry, index) => (
      <ExperienceEntryComponent key={index} {...entry} />
    ))}
  </div>
);

export default ExperienceSection;
