import React, { useState } from "react";
import { useSatellites } from "../context/SatellitesContext";

export function Rocket() {
  const { addSatellite } = useSatellites();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    size: "",
    fuel: "",
    country: "",
    fuel_mass: "",
    rocket_mass: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
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

    // RP-1 + LOX (kerosene) ~3.3 km/s
    // Liquid hydrogen + LOX ~4.5 km/s
    // Solid (military rocket/jet) ~2.5 km/s

    // Clear error and submit
    setError("");
    addSatellite(form);

    // Reset form
    setForm({
      name: "",
      size: "",
      fuel: "",
      country: "",
      fuel_mass: "",
      rocket_mass: ""
    });
  };

  return (
    <div className="flex flex-col border-2 border-white p-4 rounded-md max-w-md mx-auto mt-10">
      {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
      <h1 className="text-2xl font-bold mb-4">Rocket Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Satellite name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          name="size"
          placeholder="Satellite size (km)"
          min="0"
          value={form.size}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <select
          name="fuel"
          value={form.fuel}
          onChange={handleChange}
          className="border p-2 rounded bg-neutral-800 text-white"
          required
        >
          <option value="">Select fuel type</option>
          <option value="RP-1 + LOX">RP-1 + LOX (Kerosene)</option>
          <option value="Liquid hydrogen + LOX">Liquid hydrogen + LOX</option>
          <option value="Solid">Solid (military rocket/jet)</option>
        </select>

        <input
          type="number"
          name="fuel_mass"
          placeholder="Fuel mass (kg)"
          min="0"
          value={form.fuel_mass}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          name="rocket_mass"
          placeholder="Rocket mass (kg)"
          min="0"
          value={form.rocket_mass}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="country"
          placeholder="Country of origin"
          value={form.country}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
