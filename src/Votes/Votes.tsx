import './Votes.css';

function Votes(){
    return(
        <main className="vote-main">
            <h3 className="vote-title">Vote Here</h3>
            <section>
                <div className="vote-btns">
                    <button className="adButtons">Chocolate</button>
                    <button className="adButtons">Vanilla</button>
                    <button className="adButtons">Strawberry</button>
                </div>
                <div className="vote-div">
                    <div className="vote-ratio-container">
                        <p className="adDesigner-headings">Chocolate</p>
                        <p>percentage</p>
                    </div>
                    <div className="vote-percent-bar chocolate-color"></div>
                </div>
                <div className="vote-div">
                    <div className="vote-ratio-container">
                        <p className="adDesigner-headings">Vanilla</p>
                        <p>percentage</p>
                    </div>
                    <div className="vote-percent-bar vanilla-color"></div>
                </div>
                <div className="vote-div">
                    <div className="vote-ratio-container">
                        <p className="adDesigner-headings">Strawberry</p>
                        <p>percentage</p>
                    </div>
                    <div className="vote-percent-bar strawberry-color"></div>
                </div>
            </section>
        </main>
    );

};



export default Votes;