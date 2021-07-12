import './AdDesigner.css';
import { useState } from "react";

function AdDesigner(){

    const [flavor, setFlavor] = useState(0);

    let chosenFlavor: string = "";
    let chocButton: string = "adButtons";
    let strawButton: string = "notSelected";
    let vanilButton: string = "notSelected";

    if (flavor === 0) {
        chosenFlavor = "Chocolate";
        chocButton = "adButtons";
        strawButton = "notSelected";
        vanilButton = "notSelected"
    } else if (flavor === 1) {
        chosenFlavor = "Vanilla"
        chocButton = "notSelected";
        strawButton = "notSelected";
        vanilButton = "adButtons"
    } else {
        chosenFlavor = "Strawberry"
        chocButton = "notSelected";
        strawButton = "adButtons";
        vanilButton = "notSelected"
    } 
    
    const [mode, setMode] = useState(true);

    let darkBackground: string = "";
    let darkText: string = "";
    let lightButton: string = "adButtons";
    let darkButton:string = "notSelected";
    
    if (mode === true){
        darkBackground = "";
        darkText = "";
        lightButton = "adButtons";
        darkButton = "notSelected";
    } else if (mode === false) {
        darkBackground = "dark-background"
        darkText = "dark-text"
        lightButton = "notSelected";
        darkButton = "adButtons";
    }

    const [count, setCount] = useState(44);



   return(
   <main className="AdDesigner">
        <div>
            <h2 className={`adDesigner-title`}>Ad Designer</h2>
            <div className={`ad-container ${darkBackground}`}>
                <p className={`ad-para adDesigner-headings ${darkText}`}>Vote For</p>
                <p className={`ad-para currentAdChoice ${darkText}`} style={{fontSize: `${count}px`}}>{chosenFlavor}</p>
            </div>
        </div>

        <div>
            <p className="adDesigner-headings">What to Support</p>
            <div>
                <button onClick={() => {setFlavor(0)}} className={`${chocButton}`}>Chocolate</button>
                <button onClick={() => {setFlavor(1)}} className={`${vanilButton}`}>Vanilla</button>
                <button onClick={() => {setFlavor(2)}} className={`${strawButton}`}>Strawberry</button>
            </div>
        </div>
        <div>
            <p className="adDesigner-headings">Color Theme</p>
            <div>
                <button onClick={() => {setMode(true)}}   className={`${lightButton}`}>Light</button>
                <button onClick={() => {setMode(false)}}  className={`${darkButton}`}>Dark</button>
            </div>
        </div>

        <div>
            <p className="adDesigner-headings">Font Size</p>
            <div className="upDown-container">
                <button onClick={() => {setCount(count - 1)}} className="adButtons">Down</button>
                <p className="font-size-counter"> {count}</p>
                <button onClick={() => {setCount(count + 1)}} className="adButtons">Up</button>
            </div>
        </div>

    </main>
   )
}



export default AdDesigner;