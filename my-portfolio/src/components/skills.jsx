import React from 'react';
import './Skills.css'; // Import the CSS file

function Skills() {
  return (
    <section id='skills' className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
          
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
        
            <li>Vercel</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

