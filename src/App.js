import { useState } from "react";
import "./App.css";
import { chars } from "./chars";

function App() {
  const [text, changeText] = useState("");
  const [modText, setModText] = useState("");

  function chooseArray(obj) {
    let str = String();
    switch (Math.ceil(Math.random() * Object.keys(obj).length)) {
      case 1:
        str = "small";
        break;
      case 2:
        str = "normal";
        break;
      case 3:
        str = "hard";
        break;
      default:
        str = "small";
    }
    return obj[str];
  }

  function chooseLetter(array) {
    return array[Math.ceil(Math.random() * array.length - 1)];
  }

  function modifyText(str) {
    let newStr = String();
    for (const char of str) {
      if (chars[char.toLowerCase()]) {
        newStr += chooseLetter(chooseArray(chars[char.toLowerCase()]));
      } else {
        newStr += char;
      }
    }
    return newStr;
  }

  return (
    <div className="App">
      <h1>Input Text to modified</h1>
      <input
        value={text}
        onChange={(e) => {
          changeText(e.target.value);
          setModText(modifyText(e.target.value));
        }}
      />
      <input readOnly value={modText}></input>
    </div>
  );
}

export default App;
