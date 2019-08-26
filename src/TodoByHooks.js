import React, {useState, useEffect} from 'react'
import Timer from './Timer'

export default function TodoByHooks() {

    let [checked, setChecked] = useState(false)
    let [striked, setStriked] = useState(false)
    let [timer, setTimer] = useState(60)

    useEffect(() => {
        if( timer > 0)
            setTimeout(() => setTimer(timer-1), 1000)
    });

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
        <button
            onClick={()=> setStriked(!striked)}>
            Strike
        </button>
        <Timer time={timer}/>
    </div>;
}
