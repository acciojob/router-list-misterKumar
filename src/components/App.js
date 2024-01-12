import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Dummy data for items
const items = [
  { id: 1, name: 'Item 1', details: 'Details for Item 1' },
  { id: 2, name: 'Item 2', details: 'Details for Item 2' },
  { id: 3, name: 'Item 3', details: 'Details for Item 3' },
];

// ItemList component to display a list of items
const ItemList = () => (
  <div>
    <h2>Item List</h2>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/items/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

// ItemDetail component to display details for a selected item
const ItemDetail = ({ match }) => {
  const itemId = parseInt(match.params.id, 10);
  const selectedItem = items.find(item => item.id === itemId);

  return (
    <div>
      <h2>Item Details</h2>
      {selectedItem ? (
        <div>
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.details}</p>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

// App component with routes
const App = () => (
  <Router>
    <Routes>
      <Route path="/items/:id" element={<ItemDetail />} />
      <Route path="/items" element={<ItemList />} />
      <Route path="/" element={<div>Home</div>} />
    </Routes>
  </Router>
);

export default App;
