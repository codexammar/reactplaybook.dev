import { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button className="btn" onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default UseStateDemo;