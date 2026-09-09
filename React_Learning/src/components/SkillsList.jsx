import React from "react";

import InternCard from "./InternCard";

function SkillsList() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  const interns = [
    { id: 1, name: "Mehmood Hassan", city: "Lahore" },
    { id: 2, name: "Ali", city: "Lahore" },
    { id: 3, name: "Sara", city: "Karachi" },
  ];

  return (
    <div className="lists-container">
      <div className="skills-section">
        <h3>Technical Skills List</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="interns-section">
        <h3>Intern Profiles List</h3>
        <div className="interns-grid">
          {interns.map((intern) => (
            <InternCard key={intern.id} name={intern.name} city={intern.city} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsList;
