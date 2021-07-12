import './Ad.css';
import { useState } from "react";

interface Prop {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

function Ad({flavor, fontSize, darkTheme}: Prop){

    let currentTheme = "";

    if(darkTheme === false){
        currentTheme = "light-background"
    } else {
        currentTheme = "dark-background"
    }

    return(
        <main className={`ad-container ${currentTheme}`}>
            <p className={`vote-para ${currentTheme}`}>Vote For</p>
            <p className={`ad-para ${darkTheme}`} style={{fontSize: `${fontSize}px`}}>{flavor}</p>
        </main>
    )
}

export default Ad;