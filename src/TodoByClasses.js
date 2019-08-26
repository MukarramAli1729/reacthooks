import React from 'react'
import Timer from './Timer'

export default class TodoByClasses extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            striked: false,
            timer: 60
        }
        this.toggleCheck = this.toggleCheck.bind(this)
        this.toggleStrike = this.toggleStrike.bind(this)
        this.startTimer = this.startTimer.bind(this)
    }

    toggleStrike(event) {
        this.setState({striked: !this.state.striked})
    }

    toggleCheck(event) {
        this.setState({checked: !this.state.checked})
    }

    // To give a dynamic timer in state
    startTimer() {
        if(this.state.timer > 0) {
            this.setState({timer: this.state.timer - 1})
            setTimeout(() => this.startTimer(), 1000)
        }
    }

    componentDidMount() {
        this.startTimer()
    }

    render() {
      return <div>
        <input type="checkbox"
            id="todoClasses"
            checked={this.state.checked}
            onChange={this.toggleCheck}/>
        <label
            htmlFor="todoHooks"
            className={this.state.striked ? "strike" : ""}>
            Lunch & Learn - Classes
        </label>
        <button
            onClick={this.toggleStrike}>
            Strike
        </button>
        <Timer time={this.state.timer}/>
      </div>;
    }
}
