import React, { useState } from 'react';

const Rocket: React.FC = () => {
  const [rocketData, setRocketData] = useState({
    name: '',
    height: '',
    weight: '',
    fuel: '',
    country: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRocketData({
      ...rocketData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dados do foguete:\n
      Nome: ${rocketData.name}\n
      Altura: ${rocketData.height} m\n
      Peso: ${rocketData.weight} kg\n
      Combustível: ${rocketData.fuel}\n
      País: ${rocketData.country}
    `);
  };

  return (
    <div className="border-2 border-black p-4 rounded-md max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Formulário do Foguete</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Nome do foguete"
          value={rocketData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="height"
          placeholder="Altura (m)"
          value={rocketData.height}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Peso (kg)"
          value={rocketData.weight}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="fuel"
          placeholder="Combustível"
          value={rocketData.fuel}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="country"
          placeholder="País de origem"
          value={rocketData.country}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Rocket;
