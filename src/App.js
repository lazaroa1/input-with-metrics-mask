import { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState("");

  function updateValue(newValue) {
    const valueWithoutMask = newValue.replace(/[^0-9.]/g, "");
    setNumber(valueWithoutMask);
  }

  function myFormat(num) {
    if (num) {
      return num + " CM";
    }
    return "";
  }

  return (
    <div className="App">
      <input
        value={myFormat(number)}
        onChange={(e) => updateValue(e.target.value)}
        onKeyDown={(event) => {
          const cursorPosition = event.target.selectionStart;

          if (cursorPosition >= number.length && event.key === "Backspace") {
            updateValue(number.slice(0, -1));
          }
        }}
      />
    </div>
  );
}
