import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTask: ""
        };
    }

    handleChanges = e => {
        this.setState({ ...this.state, newTask: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTask);
    };

    render() {
        console.log("rendering form");
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChanges}
                    type="text"
                    name="task"
                    value={this.state.newTask}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;