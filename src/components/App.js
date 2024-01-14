
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<div>
            <h1>Item List</h1>
            <ul>
              <li><Link to={"/items/1"} >Item 1</Link> </li>
              <li><Link to={"/items/2"} >Item 2</Link> </li>
              <li><Link to={"/items/3"} >Item 3</Link> </li>
            </ul>
          </div>} />
          <Route path="/items/1" element={<div><h1>Item 1</h1><p>Description for Item 1</p></div>} />
          <Route path="/items/2" element={<div><h1>Item 2</h1><p>Description for Item 2</p></div>} />
          <Route path="/items/3" element={<div><h1>Item 3</h1><p>Description for Item 3</p></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App