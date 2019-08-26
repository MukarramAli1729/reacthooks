import React from 'react'

export default class TodoByClasses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
        this.toggleCheck = this.toggleCheck.bind(this);
    }

    toggleCheck(event) {
        this.setState({checked: !this.state.checked});
    }

    render() {
      return <div>
        <input type="checkbox"
            id="todo"
            name="todo"
            checked={this.state.checked}
            onChange={this.toggleCheck}/>
        <label htmlFor="todo">Lunch & Learn - Classes</label>
      </div>;
    }
}