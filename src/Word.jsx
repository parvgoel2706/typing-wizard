import Letter from "./Letter";
import React from "react";

const Word = React.memo(function Word({
  word,
  userType,
  isRunning,
  cursorIdx,
  wordIdx
}) {
  return (
    <>
      <span
        className="word"
        style={{
          marginRight: "calc(10px + 1.1vw)",
          marginBottom: "calc(2px + 1vw)",
        }}
      >
        {word.split("").map((letter, idx) => (
          <Letter
            key={idx}
            letter={letter}
            {...(typeof userType !== "undefined" && { userType, idx,cursorIdx,wordIdx })}
            // {...(idx === letterIdx.current && { userLetter })}
            isRunning={isRunning}
          />
        ))}{" "}
      </span>
    </>
  );
});
export default Word;
