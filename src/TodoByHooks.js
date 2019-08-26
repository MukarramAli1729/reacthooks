import React, {useState} from 'react'

export default function TodoByHooks() {

    let [checked, setChecked] = useState(false)

    return <div>
        <input type="checkbox"
            id="todo"
            name="todo"
            checked={checked}
            onChange={() => setChecked(!checked)}/>
        <label htmlFor="todo">Lunch & Learn - Hooks</label>
    </div>;
}
