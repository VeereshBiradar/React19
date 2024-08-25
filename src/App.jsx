import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>I love working with React.js</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

export default App;
