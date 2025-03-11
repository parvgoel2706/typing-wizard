import Letter from "./Letter";
import React, { useEffect, useState } from "react";

const Word = React.memo(function Word({
  word,
  userType,
  isRunning,
  cursorIdx,
  wordIdx,
}) {
  // let [wordS, setWordS] = useState(word);
  // useEffect(() => {
  //   if (userType && userType.length > word.length) {
  //     setWordS(word + userType.slice(word.length));
  //   }
  // }, [userType]);
  // // useEffect(() => {
  // // });
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
});
export default Word;
