import "./App.css";
import TypingPrac from "./TypingPrac";
import PopupBox from "./PopupBox";
import { useEffect, useRef, useState } from "react";

function App() {
  let [isRunning, setIsRunning] = useState(false);
  let [Status, setStatus] = useState("start");
  let incorrect = useRef(0);
  let correct = useRef(0);
  let recorrect = useRef(0);
  let missed = useRef(0);
  let words = useRef(0);
  let testTime = useRef(0);

  useEffect(() => {
    correct.current = 0;
    recorrect.current = 0;
    incorrect.current = 0;
    missed.current = 0;
    words.current = 0;
  }, [isRunning]);
  return (
    <>
      <PopupBox
        setIsRunning={setIsRunning}
        isRunning={isRunning}
        Status={Status}
        setStatus={setStatus}
        correct={correct}
        incorrect={incorrect}
        missed={missed}
        testTime={testTime}
        words={words}
        recorrect={recorrect}
      />
      <TypingPrac
        setIsRunning={setIsRunning}
        isRunning={isRunning}
        setStatus={setStatus}
        correct={correct}
        incorrect={incorrect}
        missed={missed}
        testTime={testTime}
        words={words}
        recorrect={recorrect}
      />
    </>
  );
}

export default App;
