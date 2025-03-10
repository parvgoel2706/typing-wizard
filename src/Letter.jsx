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
      return;
    }
    if(typeof userType !== "undefined"){
      setLetterClass("");
    }
  }, [userType]);

  useEffect(() => {
    if (isRunning) setLetterClass("");
  }, [isRunning]);

  return (
    <>
      <span className={letterClass}>{letter}</span>
    </>
  );
});

export default Letter;
