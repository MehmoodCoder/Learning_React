import React from 'react';

function InternCard({ name, city }) {
    return (
        <div className="intern-card">
            <h4>{name}</h4>
            <p>City: {city}</p>
        </div>
    );
}

export default InternCard;