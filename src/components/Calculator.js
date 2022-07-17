import React from "react";
import "./Calculator.css";
function Calculator() {
  const [result, setResult] = React.useState("");
  return (
    <div className="calculator">
      <form action="">
        <input type="text" value={result} />
      </form>
      <div className="buttons">
        <button className="calculator-button">C</button>
        <button className="calculator-button">%</button>
        <button className="calculator-button">&larr;</button>
        <button className="calculator-button">&#247;</button>
        <button className="calculator-button">7</button>
        <button className="calculator-button">8</button>
        <button className="calculator-button">9</button>
        <button className="calculator-button">&times;</button>
        <button className="calculator-button">4</button>
        <button className="calculator-button">5</button>
        <button className="calculator-button">6</button>
        <button className="calculator-button">&minus;</button>
        <button className="calculator-button">1</button>
        <button className="calculator-button">2</button>
        <button className="calculator-button">3</button>
        <button className="calculator-button">+</button>
        <button className="calculator-button">00</button>
        <button className="calculator-button">0</button>
        <button className="calculator-button">.</button>
        <button className="calculator-button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
