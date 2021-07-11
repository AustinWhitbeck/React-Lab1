import './AdDesigner.css';
import { useState } from "react";

function AdDesigner(){

    const [flavor, setFlavor] = useState(0);

    let chosenFlavor = "";

    if (flavor === 0) {
        chosenFlavor = "Chocolate"
    } else if (flavor === 1) {
        chosenFlavor = "Vanilla"
    } else {
        chosenFlavor = "Strawberry"
    } 
    
    const [mode, setMode] = useState(true);

    let darkBackground = "";
    let darkText = "";
    
    if (mode === true){
        darkBackground = "";
        darkText = "";
    } else if (mode === false) {
        darkBackground = "dark-background"
        darkText = "dark-text"
    }


   return(
   <main className="AdDesigner">
        <div>
            <h2 className={`adDesigner-title`}>Ad Designer</h2>
            <div className={`ad-container ${darkBackground}`}>
                <p className={`ad-para adDesigner-headings ${darkText}`}>Vote For</p>
                <p className={`ad-para currentAdChoice ${darkText}`}>{chosenFlavor}</p>
            </div>
        </div>

        <div>
            <p className="adDesigner-headings">What to Support</p>
            <div>
                <button onClick={() => {setFlavor(0)}} className="adButtons">Chocolate</button>
                <button onClick={() => {setFlavor(1)}} className="adButtons">Vanilla</button>
                <button onClick={() => {setFlavor(2)}}className="adButtons">Strawberry</button>
            </div>
        </div>
        <div>
            <p className="adDesigner-headings">Color Theme</p>
            <div>
                <button onClick={() => {setMode(true)}} className="adButtons">Light</button>
                <button onClick={() => {setMode(false)}}  className="adButtons">Dark</button>
            </div>
        </div>

        <div>
            <p className="adDesigner-headings">Font Size</p>
            <div className="upDown-container">
                <button className="adButtons">Down</button>
                <p className="font-size-counter">44</p>
                <button className="adButtons">Up</button>
            </div>
        </div>

    </main>
   )
}



export default AdDesigner;