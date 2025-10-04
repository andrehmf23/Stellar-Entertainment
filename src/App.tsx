// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contracts from "./pages/Contracts";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/contracts">Contracts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contracts" element={<Contracts />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

export default App;