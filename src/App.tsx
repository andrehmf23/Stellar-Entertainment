// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Orbit, Home, Contracts } from "./pages";
import { ContextProviders } from "./context";
import { CustomHeader } from "./components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/orbit" element={<Orbit />} />
        <Route path="/contracts" element={<Contracts />} />
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