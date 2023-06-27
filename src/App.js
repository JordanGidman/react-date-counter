import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  //generate a new date each time the component is re-rendered
  const date = new Date();
  date.setDate(date.getDate() + count);

  //Event handler functions
  function handleStepChange(e) {
    setStep(+e.target.value);
  }

  function handleCountChange(e) {
    setCount(+e.target.value);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  //JSX
  return (
    <div className="counter">
      <h1 className="title">Date Checker</h1>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleStepChange}
          className="input-slider"
        />

        <span className="slider-text">{step}</span>
      </div>

      <div>
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <input
          className="input-box"
          type="number"
          value={count}
          onChange={handleCountChange}
        />
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>

      <p>
        <span className="date-text">
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span className="date-text">{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
