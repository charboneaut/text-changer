import { useState } from "react";
import "./App.css";

function App() {
  const [text, changeText] = useState("");
  return (
    <div onChange={console.log(text)} className="App">
      <h1>Input Text to modified</h1>
      <input value={text} onChange={(e) => changeText(e.target.value)} />
    </div>
  );
}

export default App;
