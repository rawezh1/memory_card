import React, { useState, useEffect } from "react";


const ScoreBar = (props) => {


    return (
        <div>
            <p>{props.currentScore}</p>
            <p>{props.bestScore}</p>
        </div>
    );
}

export default ScoreBar;