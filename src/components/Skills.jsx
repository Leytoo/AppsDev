import React, { useState } from 'react';

const skillsData = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'JavaScript',
    description: 'A programming language used to make webpages interactive.',
  },
  {
    name: 'HTML',
    description: 'The standard markup language for creating web pages.',
  },
  {
    name: 'CSS',
    description: 'A style sheet language used for describing the look of a document.',
  },
  {
    name: 'Node.js',
    description: 'A runtime environment that allows JavaScript to run on the server.',
  },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="skills-section">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="skill-card"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3>{skill.name}</h3>
          {hoveredIndex === index && (
            <p className="skill-description">{skill.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Skills;
