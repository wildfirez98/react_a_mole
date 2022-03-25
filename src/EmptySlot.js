import React from "react";
import { useEffect } from "react"
import MoleHill from "../src/molehill.png"

const EmptySlot = (props) => {
    
    useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000)
    let timer = setTimeout(() => {
        props.toggle(true)
    }, randSeconds)
    return () => clearTimeout(timer)
})
    
    return(
        <div className="emptySlot">
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>    
    )
}

export default EmptySlot