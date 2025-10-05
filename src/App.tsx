import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About, Orbit, Home, Contracts } from "./pages";
import Rocket from "./pages/Rocket";
import Satellites from "./pages/Satellites";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 p-4 flex gap-6">
        <Link to="/" className="text-white font-semibold hover:text-yellow-400 transition-colors">Dashboard</Link>
        <Link to="/contracts" className="text-white font-semibold hover:text-yellow-400 transition-colors">Contracts</Link>
        <Link to="/about" className="text-white font-semibold hover:text-yellow-400 transition-colors">About</Link>
        <Link to="/orbit" className="text-white font-semibold hover:text-yellow-400 transition-colors">Orbit</Link>
        <Link to="/rocket" className="text-white font-semibold hover:text-yellow-400 transition-colors">Rocket</Link>
        <Link to="/satellites" className="text-white font-semibold hover:text-yellow-400 transition-colors">Satellites</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/orbit" element={<Orbit />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/rocket" element={<Rocket />} />
        <Route path="/satellites" element={<Satellites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
