<<<<<<< HEAD
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About, Contracts, Home, Orbit, Rocket, Satellites } from "./pages";

export default function App() {
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
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Orbit, Home, Contracts, Rocket } from "./pages";
import { Header } from "./components";
import { routes } from "./routes";

export default function App() {
    return (
        <BrowserRouter>
            <main className="min-h-screen bg-[#1B2B85]">
                <Header />
                <Routes>
                    <Route path={routes.home} element={<Home />} />
                    <Route path={routes.orbit} element={<Orbit />} />
                    <Route path={routes.contracts} element={<Contracts />} />
                    <Route path={routes.rocket} element={<Rocket />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
>>>>>>> 6dac3978f3975a98b1d4cf900ac9200abbdbb4f9
}
