// CardComponent.tsx
import React from 'react';
import { ProjectType } from './projectsData';
import './index.scss';

const CardComponent: React.FC<ProjectType> = ({
  projectImgLinks,
  title,
  description,
  technology,
  liveDemoUrl,
  githubUrl,
}) => {
  return (
    <div className="card-container">
      <img src={projectImgLinks[0]} alt={title} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="tech-stack">
          <strong>Technology Stack</strong>
          <ul>
            {technology.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="buttons">
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export { CardComponent };
