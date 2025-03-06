import { useEffect, useState } from "react";
import { generate, count } from "random-words";
import Word from "./Word";
import "./TypingText.css"

export default function TypingText({ setStartTimer, isRunning }) {
  let [randomArray, setRandomArray] = useState(
    generate({ exactly: 202, min: 2, max: 8 })
  );

  let [userType, setUserType] = useState("");

  let handlePress = () => {
    setStartTimer(true);
    window.removeEventListener("keydown", handlePress);
  };
  
  let handleInput = (event) => {
    if (event.key === " ") {
      return setUserType("");
    }
    else if(event.key === "Backspace"){
      return setUserType((prev)=>prev.slice(0,-1))
    }
    let keys=["Control","NumLock","CapsLock","Tab","Shift","Enter","Unidentified"];
    if(!keys.includes(event.key))
    setUserType((prevVal)=>{return `${prevVal}${event.key}`});
  };
  
  useEffect(() => {
    if (isRunning) {
      setUserType("")
      setRandomArray(generate({ exactly: 202, min: 2, max: 8 }));
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
      <div className="TypingText">
        {randomArray.map((word, idx) => (
          <Word key={idx} word={word} />
        ))}
      </div>
      {userType}
    </>
  );
}
