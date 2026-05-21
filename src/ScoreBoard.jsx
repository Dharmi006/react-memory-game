import { useState } from "react";

export default function ScoreBoard({score,bestScore}){
    return(
        <>

            <div className="score-display">
            <div>Score: {score}</div>
            <div>Best score: {bestScore}</div>
            </div>
            
        </> 
    );
}