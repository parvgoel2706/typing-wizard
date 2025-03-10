import "./Letter.css";
import { useEffect, useState } from "react";
import React from "react";

const Letter = React.memo(function Letter({
  letter,
  userType,
  idx,
  isRunning,
}) {
  let [letterClass, setLetterClass] = useState("");
  useEffect(() => {
    if (userType) {
      setLetterClass(
        userType.length > idx
          ? userType[idx] === letter
            ? "correct"
            : "incorrect"
          : null
      );
    }
  }, [userType]);

  useEffect(() => {
    if (isRunning) setLetterClass("");
  }, [isRunning]);
  useEffect(() => {
    console.log("PArv");
  });
  return (
    <>
      <span id="letter" className={letterClass}>
        {letter}
      </span>
    </>
  );
});

export default Letter;
