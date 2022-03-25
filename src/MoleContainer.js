import React from "react";
import Mole from "./Mole";
import { useState } from 'react'
import EmptySlot from "./EmptySlot";

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    const moleBop = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} moleBop={moleBop} /> : <EmptySlot toggle={setTheMole} />

    return(
        <div className="moleContainer" style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer