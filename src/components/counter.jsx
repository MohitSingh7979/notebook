import { createRef, useState } from "react";

const Counter = ({
  initCount = 0,
  incStep = 1,
  decStep = 1,
  minLmt = -Infinity,
  maxLmt = Infinity,
}) => {
  const [count, setCount] = useState(initCount);
  function inc() {
    const newCount = count + incStep;
    if (newCount <= maxLmt) {
      setCount(newCount);
    }
  }

  function dec() {
    const newCount = count - decStep;
    if (newCount >= minLmt) {
      setCount(newCount);
    }
  }

  const buttonRef = createRef()
  buttonRef.current.addEventListener()
  return (
    <div>

      <h1>Counter {count}</h1>
      <button ref={buttonRef}>inc</button>
      <button ref={buttonRef}>dec</button>
    </div>
  );
};

export default Counter;
