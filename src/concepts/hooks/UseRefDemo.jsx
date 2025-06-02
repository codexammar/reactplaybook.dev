import { useState, useRef } from "react";

function UseRefDemo() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  const inputRef = useRef(null);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    refCount.current += 1;
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <p><strong>State count:</strong> {count}</p>
      <p><strong>Ref count:</strong> {refCount.current}</p>
      <button className="btn" onClick={handleClick}>
        Update Both
      </button>

      <div style={{ marginTop: "1.5rem" }}>
        <input ref={inputRef} type="text" placeholder="Click to focus me" />
        <button className="btn" onClick={focusInput} style={{ marginLeft: "1rem" }}>
          Focus Input
        </button>
      </div>
    </div>
  );
}

export default UseRefDemo;
