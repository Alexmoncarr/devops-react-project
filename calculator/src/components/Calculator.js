import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input)); // ⚠️ Cuidado con eval en producción, solo es un ejemplo inicial
    } catch {
      setInput("Error");
    }
  };

  return (
    <div>
      <input type="text" value={input} readOnly />
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => calculate()}>=</button>
        {/* Agrega otros botones para operaciones */}
      </div>
    </div>
  );
}

export default Calculator;
