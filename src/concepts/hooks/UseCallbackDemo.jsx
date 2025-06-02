import React, { useState, useCallback } from "react";

// Memoized child that only re-renders when props change
const List = React.memo(({ onItemClick }) => {
  console.log("🔁 List Rendered");
  return (
    <div>
      <button onClick={() => onItemClick("Item A")}>Item A</button>
      <button onClick={() => onItemClick("Item B")}>Item B</button>
    </div>
  );
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [clickedItem, setClickedItem] = useState(null);

  // Without useCallback (uncomment to compare)
  // const handleClick = (item) => setClickedItem(item);

  // With useCallback (prevents re-creation on each render)
  const handleClick = useCallback((item) => {
    setClickedItem(item);
  }, []);

  return (
    <div>
      <h2>useCallback Hook</h2>
      <p><strong>Count:</strong> {count}</p>
      <p><strong>Last Clicked Item:</strong> {clickedItem || "None"}</p>

      <button className="btn" onClick={() => setCount(prev => prev + 1)} style={{ marginBottom: "1rem" }}>
        Increment Count
      </button>

      <List className="btn" onItemClick={handleClick} />

      <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
        The <code>List</code> component only re-renders when <code>handleClick</code> changes.
        Thanks to <code>useCallback</code>, it's stable and won’t cause re-renders unnecessarily.
      </p>
    </div>
  );
}

export default UseCallbackDemo;
