import React from 'react'
import Timer from './Timer'

export default class TodoByClasses extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            striked: false,
            timer: 60,
            windowWidth: window.innerWidth
        }
        this.toggleCheck = this.toggleCheck.bind(this)
        this.toggleStrike = this.toggleStrike.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.handleWindowSize = this.handleWindowSize.bind(this)
    }

    toggleStrike(event) {
        this.setState({striked: !this.state.striked})
    }

    toggleCheck(event) {
        if(this.state.checked) {
            this.setState({checked: false})
            setTimeout(this.startTimer, 100)
        }
        else {
            this.setState({timer: 60, checked: true})
        }
    }

    // To give a dynamic timer in state
    startTimer() {
        if(!this.state.checked && this.state.timer > 0) {
            this.setState({timer: this.state.timer - 1})
            setTimeout(() => this.startTimer(), 1000)
        }
    }

    handleWindowSize() {
        this.setState({windowWidth: window.innerWidth})
    }

    componentDidMount() {
        this.startTimer()
        window.addEventListener('resize', this.handleWindowSize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSize)
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
        {this.state.windowWidth <= 400 && <br/>}
        <button
            onClick={this.toggleStrike}>
            Strike
        </button>
        <Timer time={this.state.timer}/>
      </div>;
    }
}
