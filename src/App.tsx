import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About, Orbit, Home, Contracts } from "./pages";
import Rocket from "./pages/Rocket";
import Satellites from "./pages/Satellites";
import { ContextProviders } from "./context";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="flex justify-center items-center p-4 gap-40 h-20 bg-[#0000002f]">
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
