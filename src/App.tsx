import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Orbit, Home, Contracts, Rocket, Satellites } from "./pages";
import { Header } from "./components";
import { routes } from "./routes";

export default function App() {
    return (
        <BrowserRouter>
            <main className="min-h-screen bg-[#1B2B85]">
            <Header />
                <Routes>
                    <Route path={routes.home} element={<Home />} />
                    <Route path={routes.about} element={<About />} />
                    <Route path={routes.orbit} element={<Orbit />} />
                    <Route path={routes.contracts} element={<Contracts />} />
                    <Route path={routes.rocket} element={<Rocket />} />
                    <Route path={routes.satellites} element={<Satellites />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
