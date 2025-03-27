import React, { useState } from 'react';

function Closet({ items, onDeleteItem }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.type === filter);

  const types = ['all', ...new Set(items.map(item => item.type))];

  return (
    <div className="closet-container">
      <div className="filters">
        {types.map(type => (
          <button 
            key={type}
            className={`filter-btn ${filter === type ? 'active' : ''}`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div className="closet">
        <div className="closet-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="clothing-item">
              <button 
                className="delete-btn" 
                onClick={() => onDeleteItem(item.id)}
                aria-label="Delete item"
              >
                ×
              </button>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="item-type">{item.type}</p>
              <p className="date-added">
                Added: {new Date(item.dateAdded).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Closet; 