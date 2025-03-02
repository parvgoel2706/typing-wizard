import TimingOption from "./TimingOption";

export default function TypingText({isRunning}){

    let mainDivStyle = {backgroundColor:"#333333",height:"50vh",width:"80vw",padding:"20px"};

    return (
        <div className="TypingText" style={mainDivStyle}>
            <TimingOption isRunning={isRunning
                
            }/>
            
        </div>
    );
}