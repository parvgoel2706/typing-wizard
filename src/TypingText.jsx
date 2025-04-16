import { useEffect, useState, useRef, useMemo, use } from "react";
import { generate } from "random-words";
import Word from "./Word";
import "./TypingText.css";

export default function TypingText({
  setStartTimer,
  isRunning,
  correct,
  incorrect,
  missed,
  words,
  recorrect,
  difficulty,
}) {
  let mode = [4, 6, 8];
  const [randomArray, setRandomArray] = useState([]);
  let [userType, setUserType] = useState("");
  let [wordIdx, setWordIdx] = useState(0);

  let handlePress = () => {
    setStartTimer(true);
    window.removeEventListener("keydown", handlePress);
  };

  const cursorIdx = useRef(0);
  const wordIdxRef = useRef(0);
  const contentDiv = useRef();
  const userTypeRef = useRef("");
  const wordRefs = useRef([]);
  const randomArrayRefs = useRef([]);

  let handleInput = (event) => {
    if (event.key === " ") {
      let word = randomArrayRefs.current[wordIdxRef.current];
      words.current++;
      //Count correct,incorrect and missed chars
      for (let i = 0; i < word.length; i++) {
        if (userTypeRef.current.charAt(i) === word.charAt(i)) {
          correct.current++;
        } else if (userTypeRef.current.charAt(i) === "") {
          missed.current++;
        } else {
          incorrect.current++;
        }
      }
      setWordIdx((prevVal) => prevVal + 1);
      setUserType("");
      cursorIdx.current += 100;
      cursorIdx.current = Math.floor(cursorIdx.current / 100);
      cursorIdx.current *= 100;
      return;
    }
    if (event.key === "Backspace") {
      recorrect.current++;
      setUserType((prevVal) => prevVal.slice(0, -1));
      cursorIdx.current -= 1;
      return;
    }

    // to prevent CAPSLOCK TAB SHIFT etc
    if (event.key.length === 1) {
      setUserType((prevVal) => {
        if (
          prevVal.length < randomArrayRefs.current[wordIdxRef.current].length
        ) {
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
    userTypeRef.current = userType;
  }, [userType]);
  useEffect(() => {
    if (wordRefs.current[wordIdx]) {
      let wordElement = wordRefs.current[wordIdx];
      let wordRect = wordElement.getBoundingClientRect();

      if (wordRect.top > 140 + 2 * (32.4 + 0.026 * screen.width)) {
        contentDiv.current.scrollTop += 33 + 0.026 * screen.width;
        let addWord = generate({
          exactly: mode[difficulty] == 4 ? 15 : 10,
          minLength: 2,
          maxLength: mode[difficulty],
        });
        setRandomArray((preVal) => [...preVal, ...addWord]);
        // console.log(randomArray.length);
      }
    }
  }, [wordIdx]);

  useEffect(() => {
    if (isRunning) {
      setWordIdx(0);
      cursorIdx.current = 0;
      setUserType("");
      if (contentDiv.current) contentDiv.current.scrollTop = 0;
      window.addEventListener("keydown", handlePress);
      window.addEventListener("keydown", handleInput);
    }
    return () => {
      window.removeEventListener("keydown", handlePress);
      window.removeEventListener("keydown", handleInput);
    };
  }, [isRunning]);
  useEffect(() => {
    if (isRunning)
      setRandomArray(
        generate({
          exactly: mode[difficulty] == 4 ? 50 : 30,
          minLength: 2,
          maxLength: mode[difficulty],
        })
      );
  }, [isRunning, difficulty]);
  useEffect(() => {
    randomArrayRefs.current = randomArray;
  }, [randomArray]);
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
