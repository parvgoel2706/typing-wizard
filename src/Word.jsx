import Letter from "./Letter"

export default function Word({word}){
    return <span className="word">{word.split("").map((letter,idx)=><Letter key={idx} letter={letter}/>)} </span>
}