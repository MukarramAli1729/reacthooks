import React, {useState} from 'react'
import Timer from './Timer'

export default function TodoByHooks() {

    let [checked, setChecked] = useState(false)
    let [striked, setStriked] = useState(false)

    return <div>
        <input type="checkbox"
            id="todoHooks"
            checked={checked}
            onChange={() => setChecked(!checked)}/>
        <label
            htmlFor="todoHooks"
            className={striked && "strike"}>
            Lunch & Learn - Hooks
        </label>
        <button
            onClick={()=> setStriked(!striked)}>
            Strike
        </button>
        <Timer time={60}/>
    </div>;
}
