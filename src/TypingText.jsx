import { useEffect, useState, useRef, useMemo } from "react";
import { generate } from "random-words";
import Word from "./Word";
import "./TypingText.css";

export default function TypingText({ setStartTimer, isRunning }) {
  let randomArray = useMemo(() => {
    if (isRunning) {
      return generate({ exactly: 30, minLength: 2, maxLength: 10 });
    }
    return [];
  }, [isRunning]);

  let [userType, setUserType] = useState("");
  let [wordIdx, setWordIdx] = useState(0);

  let handlePress = () => {
    setStartTimer(true);
    window.removeEventListener("keydown", handlePress);
  };

  const cursorIdx = useRef(0);
  const wordIdxRef = useRef(0);
  const contentDiv = useRef();
  const wordRefs = useRef([]);

  let handleInput = (event) => {
    if (event.key === " ") {
      setWordIdx((prevVal) => prevVal + 1);
      setUserType("");
      cursorIdx.current += 100;
      cursorIdx.current = Math.floor(cursorIdx.current / 100);
      cursorIdx.current *= 100;
      return;
    }
    if (event.key === "Backspace") {
      setUserType((prevVal) => prevVal.slice(0, -1));
      cursorIdx.current -= 1;
      return;
    }

    // to prevent CAPSLOCK TAB SHIFT etc
    if (event.key.length === 1) {
      setUserType((prevVal) => {
        if (prevVal.length < randomArray[wordIdxRef.current].length) {
          cursorIdx.current += 1;
          return `${prevVal}${event.key}`;
        }
        return prevVal;
      });
    }
  };

  useEffect(() => {
    wordIdxRef.current = wordIdx;
  }, [wordIdx]);

  useEffect(() => {
    if (wordRefs.current[wordIdx]) {
      let wordElement = wordRefs.current[wordIdx];
      let wordRect = wordElement.getBoundingClientRect();

      if (wordRect.top > 140 + 2 * (32.4 + 0.026 * screen.width)) {

        contentDiv.current.scrollTop += 33 + 0.026 * screen.width;
        let addWord = generate({ exactly: 10, minLength: 2, maxLength: 10 });
        addWord.map((newWord) => randomArray.push(newWord));
      }
    }
  }, [wordIdx]);

  useEffect(() => {
    if (isRunning) {
      setWordIdx(0);
      cursorIdx.current = 0;
      setUserType("");
      window.addEventListener("keydown", handlePress);
      window.addEventListener("keydown", handleInput);
    }
    return () => {
      window.removeEventListener("keydown", handlePress);
      window.removeEventListener("keydown", handleInput);
    };
  }, [isRunning]);
  return (
    <>
      <div className="TypingText" ref={contentDiv}>
        {randomArray.map((word, idx) => (
          <Word
            key={idx}
            word={`${word} `}
            {...(idx === wordIdx && { userType, wordIdx, cursorIdx })}
            isRunning={isRunning}
            ref={(el) => (wordRefs.current[idx] = el)}
          />
        ))}
      </div>
    </>
  );
}
