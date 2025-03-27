import React, { useState } from 'react';

function ClothingForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'shirt',
    image: ''
  });

  const clothingTypes = ['Shirt', 'Jacket', 'Pants', 'Shoes', 'Accessories', 'Dress'];

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(formData);
    setFormData({ name: '', type: 'shirt', image: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="clothing-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Item name"
        required
      />
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
      >
        {clothingTypes.map(type => (
          <option key={type.toLowerCase()} value={type.toLowerCase()}>
            {type}
          </option>
        ))}
      </select>
      <input
        type="url"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <button type="submit">Add to Closet</button>
    </form>
  );
}

export default ClothingForm; 