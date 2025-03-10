import { useEffect, useRef, useState } from "react";
import Letter from "./Letter";
import React from "react";

const Word = React.memo(function Word({
  word,
  userType,
  // setUserType,
  isRunning,
  // Back,
}) {
  // let [userLetter, setUserLetter] = useState("");
  // let letterIdx = useRef(-1);

  // useEffect(() => {
  //   if (userType) {
  //     if (userType.slice(-1) === "~") {
  //       if (letterIdx.current > 0) {
  //         letterIdx.current -= 2;

  //         setUserType(userType.slice(0, -2));
  //         setUserLetter(userType[letterIdx.current] || "");
  //       }
  //     } else {
  //       if (letterIdx.current < word.length - 1) {
  //         letterIdx.current += 1;
  //         setUserLetter(userType[letterIdx.current] || "");
  //       }
  //     }
  //   }
  // }, [userType]);

  // useEffect(() => {
  //   if (isRunning) {
  //     letterIdx.current = -1;
  //     setUserLetter("");
  //   }
  // }, [isRunning]);

  return (
    <>
      <span className="word">
        {word.split("").map((letter, idx) => (
          <Letter
            key={idx}
            letter={letter}
            {...(userType && { userType, idx })}
            // {...(idx === letterIdx.current && { userLetter })}
            isRunning={isRunning}
          />
        ))}{" "}
      </span>
    </>
  );
});
export default Word;
