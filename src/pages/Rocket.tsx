import React, { useState } from 'react';
import { useSatellites } from "../context/SatellitesContext";

const Rocket: React.FC = () => {
  const { satellites, addSatellite, removeSatellite } = useSatellites();
  const [error, setError] = useState("");
  
  const [form, setForm] = useState({
    name: "",
    height: "",
    weight: "",
    fuel: "",
    country: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ 
      ...form, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.height || !form.weight || !form.fuel || !form.country) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    addSatellite(form);
    setForm({ name: "", height: "", weight: "", fuel: "", country: "" });
  };

  return <>
    <div className="flex flex-col border-2 border-white p-4 rounded-md max-w-md mx-auto mt-20">
      {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
      <h1 className="text-2xl font-bold mb-4">Formulário do Foguete</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Nome do foguete"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="height"
          placeholder="Altura (m)"
          value={form.height}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Peso (kg)"
          value={form.weight}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="Fuel mass"
          placeholder="Fuel mass (kg)"
          value={form.fuel}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="fuel"
          placeholder="Combustível"
          value={form.fuel}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <select
          name="type fuel"
          value={form.fuel}
          onChange={handleChange}
          className="border p-2 rounded bg-neutral-800 "
          required
        >
          <option value="">Select fuel type</option>
          <option value="Kerosene">RP-1 + LOX (kerosene)</option>
          <option value="Liquid hydrogen + LOX">Liquid hydrogen + LOX</option>
          <option value="Solid">Solid (military rocket/jet)</option>
        </select>
        <input
          type="text"
          name="country"
          placeholder="País de origem"
          value={form.country}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 "
        >
          Enviar
        </button>
      </form>
    </div>
  </>;
};

export default Rocket;
