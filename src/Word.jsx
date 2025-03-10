import Letter from "./Letter";
import React from "react";

const Word = React.memo(function Word({ word, userType, isRunning }) {
  return (
    <>
      <span className="word">
        {word.split("").map((letter, idx) => (
          <Letter
            key={idx}
            letter={letter}
            {...(typeof userType !== "undefined" && { userType, idx })}
            // {...(idx === letterIdx.current && { userLetter })}
            isRunning={isRunning}
          />
        ))}{" "}
      </span>
    </>
  );
});
export default Word;
