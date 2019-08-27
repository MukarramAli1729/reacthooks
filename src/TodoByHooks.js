import React, {useState, useEffect} from 'react'
import Timer from './Timer'

export default function TodoByHooks() {

    let [checked, setChecked] = useState(false)
    let [striked, setStriked] = useState(false)
    let timer = useTimer(!checked)
    let windowWidth = useWindowSize()

    return <div>
        <input type="checkbox"
            id="todoHooks"
            checked={checked}
            onChange={() => setChecked(!checked)}/>
        <label
            htmlFor="todoHooks"
            className={striked ? "strike" : ""}>
            Lunch & Learn - Hooks
        </label>
        {windowWidth <= 400 && <br/>}
        <button
            onClick={()=> setStriked(!striked)}>
            Strike
        </button>
        <Timer time={timer}/>
    </div>;
}

let useWindowSize = () => {
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleWindowWidth = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowWidth)
        return () => window.removeEventListener('resize', handleWindowWidth)
    })
    return windowWidth
}

let useTimer = (play) => {
    let [timer, setTimer] = useState(60)

    useEffect(() => {
        if( play && timer > 0)
            setTimeout(() => setTimer(timer-1), 1000)
        else
            setTimer(60)
    }, [play, timer]);
    return timer;
}
