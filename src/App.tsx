// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Orbit, Home, Contracts } from "./pages";
import Rocket from "./pages/Rocket";
import { ContextProviders } from "./context";
import { CustomHeader } from "./components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 p-4 flex gap-6">
        <Link
          to="/"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/contracts"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          Contracts
        </Link>
        <Link
          to="/about"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          About
        </Link>
        <Link
          to="/orbit"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          Orbit
        </Link>
        <Link
          to="/rocket"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          Rocket
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/orbit" element={<Orbit />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/rocket" element={<Rocket />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ContextProviders>
    <App />
  </ContextProviders>
);

export default App;
