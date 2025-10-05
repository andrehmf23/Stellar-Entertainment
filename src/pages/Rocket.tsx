import React, { useState, useEffect } from "react";
import { useSatellites } from "../context/SatellitesContext";

export function Rocket() {
  const { addSatellite } = useSatellites();
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [launching, setLaunching] = useState(false); // Estado do lançamento
  const [reseting, setReseting] = useState(false); // Estado do reset

  const [form, setForm] = useState({
    name: "",
    size: "",
    fuel: "",
    country: "",
    fuel_mass: "",
    rocket_mass: ""
  });

  // Timer
  useEffect(() => {
    if (timeLeft === 0) {
      setLaunching(true);
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft]);

  // Resetar o foguete após animação
  useEffect(() => {
    if (!launching) return;

    const animationDuration = 3000; // 3 segundos para subir e sumir
    const timer = setTimeout(() => {
      setReseting(true);
      setLaunching(false);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [launching]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.size || !form.fuel || !form.country || !form.fuel_mass || !form.rocket_mass) {
      setError("Please fill in all fields.");
      return;
    }

    if (Number(form.fuel_mass) <= 0 || Number(form.rocket_mass) <= 0) {
      setError("Masses must be greater than 0.");
      return;
    }

    const Ve = (() => {
      switch (form.fuel) {
        case "RP-1 + LOX":
          return 3.3;
        case "Liquid hydrogen + LOX":
          return 4.5;
        case "Solid":
          return 2.5;
        default:
          return 0;
      }
    })();

    if (Ve === 0) {
      setError("Invalid fuel type.");
      return;
    }

    const v = Ve * Math.log(
      (Number(form.fuel_mass) + Number(form.rocket_mass)) / Number(form.rocket_mass)
    );

    if (v < 7.8) {
      setError(
        `Insufficient speed to orbit Earth: ${v.toFixed(2)} km/s. Minimum: 7.8 km/s`
      );
      return;
    }

    setError("");
    addSatellite(form);

    setForm({
      name: "",
      size: "",
      fuel: "",
      country: "",
      fuel_mass: "",
      rocket_mass: ""
    });

    setTimeLeft(5);
  };

  return (
    <div className="flex flex-row justify-end">
      {/* Foguete */}
      <img
        src="./rocket.png"
        alt="Rocket"
        className={`absolute w-16 left-1/6 transform -translate-x-1/2 bottom-48 transition-all duration-1000 ${
          launching ? "bottom-full opacity-0" : "opacity-100"
        }
        ${
          reseting ? "bottom-0 opacity-100" : ""
        }
        `}
      />

      {/* Timer */}
      <div className="absolute bottom-20 left-1/6 transform -translate-x-1/2 flex flex-col border-2 border-white text-center p-4 rounded-md">
        <p className="text-3xl font-bold">Timer</p>
        <p className="text-2xl font-semibold">{timeLeft}s</p>
      </div>

      {/* Formulário */}
      <div className="flex flex-col border-2 border-white p-4 rounded-md mt-20 mr-30">
        {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
        <h1 className="text-2xl font-bold mb-4">Rocket Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" name="name" placeholder="Satellite name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />
          <input type="number" name="size" placeholder="Satellite size (km)" min="0" value={form.size} onChange={handleChange} className="border p-2 rounded" required />
          <select name="fuel" value={form.fuel} onChange={handleChange} className="border p-2 rounded bg-neutral-800 text-white" required>
            <option value="">Select fuel type</option>
            <option value="RP-1 + LOX">RP-1 + LOX (Kerosene)</option>
            <option value="Liquid hydrogen + LOX">Liquid hydrogen + LOX</option>
            <option value="Solid">Solid (military rocket/jet)</option>
          </select>
          <input type="number" name="fuel_mass" placeholder="Fuel mass (kg)" min="0" value={form.fuel_mass} onChange={handleChange} className="border p-2 rounded" required />
          <input type="number" name="rocket_mass" placeholder="Rocket mass (kg)" min="0" value={form.rocket_mass} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="country" placeholder="Country of origin" value={form.country} onChange={handleChange} className="border p-2 rounded" required />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
}
