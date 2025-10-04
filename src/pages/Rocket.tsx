import React from 'react';

const Rocket: React.FC = () => {
  const handleClick = () => {
    alert("Você clicou!");
  };

  return <>
    <div className="border-10 border-black ">
      <h1>Rocket</h1>
      <button onClick={handleClick}>Clique aqui</button>
    </div>

  </>
};

export default Rocket;