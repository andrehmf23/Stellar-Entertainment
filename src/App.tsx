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
}
