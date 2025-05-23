import React from "react";
import "./education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-item">
        <h3>Bachelor of Science in Computer Science</h3>
        <p className="school-name">Technical University of Mombasa</p>
        <p className="education-year">2022 - Present</p>
        <p className="education-desc">
          Focused on software engineering, data analysis, and web development. Completed multiple academic and personal projects.
        </p>
      </div>

      <div className="education-item">
        <h3>Software Development Bootcamp</h3>
        <p className="school-name">Power Learn Project</p>
        <p className="education-year">Feb 2025 - Present</p>
        <p className="education-desc">
          Learnt about web development, database, enterpreneurship and software engineering.
        </p>
      </div>
    </section>
  );
}

export default Education;

