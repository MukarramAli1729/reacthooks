import React, {useState, useEffect, useReducer} from 'react'
import Timer from './Timer'

export default function TodoByHooks() {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'TOGGLE_CHECK':
                return {checked: !state.checked};
            case 'TOGGLE_STRIKE':
                return {strike: !state.striked};
            default:
                return state;
        }
    }, {
        checked: false,
        striked: false
    });
    let timer = useTimer(!state.checked)
    let windowWidth = useWindowSize()


    return <div>
        <input type="checkbox"
            id="todoHooks"
            checked={state.checked}
            onChange={() => dispatch({type: 'TOGGLE_CHECK'})}/>
        <label
            htmlFor="todoHooks"
            className={state.striked ? "strike" : ""}>
            Lunch & Learn - Hooks
        </label>
        {windowWidth <= 400 && <br/>}
        <button
            onClick={()=> dispatch({type: 'TOGGLE_STRIKE'})}>
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
