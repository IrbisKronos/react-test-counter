import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h2>Лічільник:</h2>
        <h1>{count}</h1>

        <button className="minus"
          onClick={() => { setCount((prev) => prev - 1) }}>
          Мінус -
        </button>

        <button
          className="plus"
          onClick={() => { setCount((prev) => prev + 1) }}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
