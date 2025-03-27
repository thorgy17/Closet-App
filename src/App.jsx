import React, { useState, useEffect } from 'react';
import './App.css';
import ClothingForm from './components/ClothingForm';
import Closet from './components/Closet';

function App() {
  const [clothingItems, setClothingItems] = useState(() => {
    // Load initial data from localStorage
    const savedItems = localStorage.getItem('closetItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('closetItems', JSON.stringify(clothingItems));
  }, [clothingItems]);

  const addClothingItem = (newItem) => {
    const itemWithId = {
      ...newItem,
      id: Date.now(),
      dateAdded: new Date().toISOString()
    };
    setClothingItems([...clothingItems, itemWithId]);
  };

  const deleteItem = (itemId) => {
    setClothingItems(clothingItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="App">
      <h1>My Digital Closet</h1>
      <ClothingForm onAddItem={addClothingItem} />
      <Closet items={clothingItems} onDeleteItem={deleteItem} />
    </div>
  );
}

export default App; 