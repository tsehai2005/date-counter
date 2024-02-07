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

  function decrementStep() {
    if (step > 0) setStep((s) => s - 1);
  }
  function incrementStep() {
    setStep((s) => s + 1);
  }
  function decrementCount() {
    if (count > 0) setCount((c) => (c - step > 0 ? c - step : 0));
  }
  function incrementCount() {
    setCount((c) => c + step);
  }
  return (
    <div>
      <div>
        <button onClick={decrementStep}>-</button>
        <span> Step: {step}</span>
        <button onClick={incrementStep}>+</button>
      </div>
      <div>
        <button onClick={decrementCount}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}
