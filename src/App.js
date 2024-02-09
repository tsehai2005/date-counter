import { useState } from "react";
import "./style.css";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date(2027, 6, 21);
  date.setDate(date.getDate() + count);
  const formatedDate = date.toDateString();

  // function decrementStep() {
  //   if (step > 0) setStep((s) => s - 1);
  // }
  // function incrementStep() {
  //   setStep((s) => s + 1);
  // }
  function decrementCount() {
    if (count > 0) setCount((c) => (c - step > 0 ? c - step : 0));
  }
  function incrementCount() {
    setCount((c) => c + step);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          max="10"
          min="1"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step:{step}</span>
      </div>
      <div>
        <button onClick={decrementCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={incrementCount}>+</button>
      </div>
      <div>
        {count === 0 ? (
          <p>Today is {formatedDate}</p>
        ) : (
          <p>
            {count} days from today is {formatedDate}
          </p>
        )}
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
