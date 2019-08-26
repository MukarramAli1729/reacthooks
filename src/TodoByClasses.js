import React from 'react'

export default class TodoByClasses extends React.Component {

    render() {
      return <div>
        <input type="checkbox" id="todo" name="todo"
             checked/>
        <label for="todo">Lunch & Learn - Classes</label>
      </div>;
    }
}