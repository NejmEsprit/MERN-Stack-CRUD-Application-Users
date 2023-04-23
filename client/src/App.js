
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";

import H1 from './pages/H1';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<H1 />} />
       <Route path="/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
