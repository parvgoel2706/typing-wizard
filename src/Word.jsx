import Letter from "./Letter";
import React, { forwardRef } from "react";

const Word = React.memo(
  forwardRef(function Word(
    { word, userType, isRunning, cursorIdx, wordIdx},
    ref
  ) {
    return (
      <>
        <span
          className="word"
          style={{
            marginRight: "calc(8px + 0.8vw)",
            marginBottom: "calc(2px + 1vw)",
          }}
          ref={ref}
        >
          {word.split("").map((letter, idx) => (
            <Letter
              key={idx}
              letter={letter}
              {...(typeof userType !== "undefined" && {
                userType,
                idx,
                cursorIdx,
                wordIdx,
              })}
              // {...(idx === letterIdx.current && { userLetter })}
              isRunning={isRunning}
            />
          ))}{" "}
        </span>
      </>
    );
  })
);
export default Word;
