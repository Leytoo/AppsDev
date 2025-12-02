import React, { useState } from 'react';

const skillsData = [
  {
    name: 'Resilience',
    description: `I stay committed even when facing challenges. Whether it's debugging code or balancing studies, I push through setbacks with determination and a positive mindset.`,
  },
  {
    name: 'Goal-Oriented',
    description: `I set clear objectives and work consistently toward achieving them. My focus on finishing my degree and building a tech career reflects my drive and long-term vision.`,
  },
  {
    name: 'Curiosity',
    description: `I’m passionate about expanding my knowledge. I actively seek out new tools, frameworks, and concepts to grow as a developer and stay updated in the fast-paced tech world.`,
  },
  {
    name: 'Team Collaboration',
    description: `I value working with others and believe that great ideas come from shared effort. I communicate clearly, respect diverse perspectives, and contribute meaningfully to group projects.`,
  },
  {
    name: 'Attention to Detail',
    description: `I take pride in crafting clean, functional code and polished designs. Whether it's refining a layout or debugging a feature, I pay close attention to the small things that make a big difference.`,
  },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="skills-container">
      <h2 className="skills-title">Core Competencies</h2>
      <div className="skills-section">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleCardClick(index)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCardClick(index);
              }
            }}
          >
            <h3 className='skill-text'>{skill.name}</h3>
            {hoveredIndex === index && (
              <p className="skill-description">{skill.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="skill-modal-backdrop" onClick={handleBackdropClick}>
          <div className="skill-modal">
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <h2 className="modal-title">{skillsData[selectedIndex].name}</h2>
            <p className="modal-description">{skillsData[selectedIndex].description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
