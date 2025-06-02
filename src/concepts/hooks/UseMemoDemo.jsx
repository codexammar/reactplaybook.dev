import React, { useState, useMemo, useRef } from "react";

// Simulate expensive calculation
function slowCheckIsEven(num) {
  const start = performance.now();
  while (performance.now() - start < 500) {} // 500ms delay
  return num % 2 === 0;
}

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);
  const renderCount = useRef(0);
  renderCount.current++;

  // Without memoization (uncomment to compare)
  // const isEven = slowCheckIsEven(count);

  // With memoization
  const isEven = useMemo(() => {
    return slowCheckIsEven(count);
  }, [count]);

  return (
    <div>
      <h2>useMemo Hook</h2>
      <p><strong>Render Count:</strong> {renderCount.current}</p>
      <p><strong>Current Number:</strong> {count}</p>
      <p><strong>Is Even?</strong> {isEven ? "Yes" : "No"}</p>

      <button
        className="btn" onClick={() => setCount(prev => prev + 1)}
        style={{ marginRight: "1rem" }}
      >
        Increment Number
      </button>

      <button className="btn" onClick={() => setOtherState(prev => !prev)}>
        Toggle Other State
      </button>

      <p><strong>Other State:</strong> {otherState ? "ON" : "OFF"}</p>
      <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
        The expensive function only reruns when the number changes.
        Toggling other state won't trigger it due to useMemo.
      </p>
    </div>
  );
}

export default UseMemoDemo;
