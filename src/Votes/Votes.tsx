import './Votes.css';
import { useState } from 'react';

function Votes(){

    const [chocolate, setChocolate] = useState(0);

    const [strawberry, setStrawberry] = useState(0);

    const [vanilla, setVanilla] = useState(0);

    let totalVotes = chocolate + strawberry + vanilla;
    let chocPercentage = Math.floor(chocolate / totalVotes * 100);
    let strawPercentage = Math.floor(strawberry / totalVotes * 100);
    let vanilPercentage = Math.floor(vanilla / totalVotes * 100);

    let chocHidden = "";
    let strawHidden = "";
    let vanilHidden = "";

    if (chocolate > 0) {
        chocHidden = "vote-div";
    } else {
        chocHidden = "hidden";
    }

    if (strawberry > 0) {
        strawHidden = "vote-div";
    } else {
        strawHidden = "hidden";
    }

    if (vanilla > 0) {
        vanilHidden = "vote-div";
    } else {
        vanilHidden = "hidden";
    }

    return(
        <main className="vote-main">
            <h3 className="vote-title">Vote Here</h3>
            <section>
                <div className="vote-btns">
                    <button onClick={() => {setChocolate(chocolate + 1)}} className="adButtons">Chocolate</button>
                    <button onClick={() => {setStrawberry(strawberry + 1)}} className="adButtons">Strawberry</button>
                    <button onClick={() => {setVanilla(vanilla + 1)}} className="adButtons">Vanilla</button>
                </div>
                <div className={`${chocHidden}`}>
                    <div className="vote-ratio-container">
                        <p className="adDesigner-headings">Chocolate</p>
                        <p>{chocolate} ({chocPercentage}%)</p>
                    </div>
                    <div className="vote-percent-bar chocolate-color" style={{width: `${chocPercentage}%`}}></div>
                </div>
                <div className={`${strawHidden}`}>
                    <div className="vote-ratio-container">
                        <p className="adDesigner-headings">Strawberry</p>
                        <p>{strawberry} ({strawPercentage}%)</p>
                    </div>
                    <div className="vote-percent-bar strawberry-color" style={{width: `${strawPercentage}%`}}></div>
                </div>
                <div className={`${vanilHidden}`}>
                    <div className="vote-ratio-container">
                        <p className="adDesigner-headings">Vanilla</p>
                        <p>{vanilla} ({vanilPercentage}%)</p>
                    </div>
                    <div className="vote-percent-bar vanilla-color" style={{width: `${vanilPercentage}%`}}></div>
                </div>
            </section>
        </main>
    );

};



export default Votes;