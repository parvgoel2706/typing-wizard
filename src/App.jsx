import "./App.css";
import TypingPrac from "./TypingPrac";
import PopupBox from "./PopupBox";
import { useState } from "react";

function App() {
  let [isRunning, setIsRunning] = useState(false);
  let [Status, setStatus] = useState("start");
  return (
    <>
      <PopupBox
        setIsRunning={setIsRunning}
        isRunning={isRunning}
        Status={Status}
        setStatus={setStatus}
      />
      <TypingPrac
        setIsRunning={setIsRunning}
        isRunning={isRunning}
        setStatus={setStatus}
      />
    </>
  );
}

export default App;
