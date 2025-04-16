import Letter from "./Letter";
import React, { forwardRef } from "react";

const Word = React.memo(
  forwardRef(function Word(
    { word, userType, isRunning, cursorIdx, wordIdx },
    ref
  ) {
    return (
      <>
        <span
          className="word"
          style={{
            marginRight: "calc(8px + 0.8vw)",
            marginBottom: "calc(2px + 1vw)",
            backgroundColor: cursorIdx
              ? "rgba(67, 75, 84, 0.4)"
              : "transparent", // subtle highlight
            borderBottom: cursorIdx ? "2px solid rgb(193, 170, 79)" : "none", // yellow underline
            borderRadius: cursorIdx ? "4px" : "0",
            padding: cursorIdx ? "0 4px" : "0",
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
              isRunning={isRunning}
            />
          ))}{" "}
        </span>
      </>
    );
  })
);
export default Word;
