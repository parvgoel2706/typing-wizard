import "./EndPage.css";

export default function EndPage({setStatus,setIsRunning}){

    let handleHome=()=>{
        setStatus("start");
    }
    let handleReset=()=>{
        setIsRunning(true);
    }
    return(<div className="EndPage">
        <button onClick={handleHome}>Home</button>
        <button onClick={handleReset}>Restart</button>
    </div>)
}