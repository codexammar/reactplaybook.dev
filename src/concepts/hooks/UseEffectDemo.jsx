import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
  const previousTitle = document.title;
  const newTitle = `Count: ${count}`;
  document.title = newTitle;
  setTitle(newTitle);

  return () => {
    document.title = previousTitle;
  };
}, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>Increment</button>
      <p style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
        (Also updates page title dynamically)
      </p>
    </div>
  );
}

export default UseEffectDemo;
