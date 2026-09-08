import React from "react";

function Card({ title, description, color }) {
  return (
    <div style={{ borderLeft: `4px solid ${color}` }}>
      <h3>{title}</h3> <p>{description}</p>
    </div>
  );
}

export default Card;
