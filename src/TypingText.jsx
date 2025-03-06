import { useEffect, useState } from "react";
import { generate, count } from "random-words";
import Word from "./Word";

export default function TypingText({ changeStart, isRunning }) {

  let [randomArray, setRandomArray] = useState(
    generate({ exactly: 202, min: 2, max: 8 })
  );

  let mainDivStyle = {
    backgroundColor: "#333333",
    height: "calc(80px + 4.8vw)",
    width: "80vw",
    padding: "35px",
    fontSize: "calc(20px + 1.1vw)",
    fontFamily: "Roboto Mono, monospace",
    fontOpticalSizing: "auto",
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "start",
    overflowY: "hidden",
    lineHeight: "1.7",
    color: "rgba(255, 255, 255, 0.6)",
  };

  let handlePress = () => {
    changeStart(true);
    window.removeEventListener("keydown", handlePress);
  };

  useEffect(() => {
    if (isRunning) {
      setRandomArray(generate({ exactly: 202, min: 2, max: 8 }));
      window.addEventListener("keydown", handlePress);
    }
    return () => {
      window.removeEventListener("keydown", handlePress);
    };
  }, [isRunning]);

  return (
    <div className="TypingText" style={mainDivStyle}>
      {randomArray.map((word, idx) => (
        <Word key={idx} word={word} />
      ))}
    </div>
  );
}
