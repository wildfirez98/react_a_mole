import React from "react";
import { useEffect } from 'react'
import moleImg from "../src/mole.png"

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })


    return(
        <div className="moleAnimal">
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.moleBop} />
        </div>
    )
}

export default Mole