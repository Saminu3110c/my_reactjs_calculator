import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";

const Calculator = () => {
  const [buffer, setBuffer] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setBuffer((prev) => prev + value);
  };

  const handleClear = () => {
    setBuffer("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      const evalResult = evaluate(buffer);
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="buffer">{buffer || "0"}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "/", "="].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button className="clear" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;