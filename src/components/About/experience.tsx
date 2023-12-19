import React from 'react';
import './index.scss';

interface ExperienceEntryProps {
  role: string;
  company: string,
  period: string,
  responsibilities:string[]
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  role,
  company,
      period,
      responsibilities
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
      <ul className="responsibility">{responsibilities.map((item:string)=><li>{item}</li>)}</ul>
    </div>
  </div>
);

interface ExperienceSectionProps {
  entries: ExperienceEntryProps[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ entries }) => (
  <div className="experience-section">
    <h2 className="section-title">Professional Experience</h2>
    {entries.map((entry, index) => (
      <ExperienceEntry key={index} {...entry} />
    ))}
  </div>
);

export default ExperienceSection;
