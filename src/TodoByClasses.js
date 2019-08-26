import React from 'react'
import Timer from './Timer'

export default class TodoByClasses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            striked: false
        }
        this.toggleCheck = this.toggleCheck.bind(this);
        this.toggleStrike = this.toggleStrike.bind(this);
    }


    toggleStrike(event) {
        this.setState({striked: !this.state.striked});
    }

    toggleCheck(event) {
        this.setState({checked: !this.state.checked});
    }

    render() {
      return <div>
        <input type="checkbox"
            id="todoClasses"
            checked={this.state.checked}
            onChange={this.toggleCheck}/>
        <label
            htmlFor="todoHooks"
            className={this.state.striked && "strike"}>
            Lunch & Learn - Classes
        </label>
        <button
            onClick={this.toggleStrike}>
            Strike
        </button>
        <Timer time={60}/>
      </div>;
    }
}
