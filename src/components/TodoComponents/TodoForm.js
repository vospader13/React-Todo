import React, {Component} from "react";

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState ({ [e.target.name]: e.target.value });

    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(e, this.state.item);
    };

    render () {
        return (
            <form onSubmit = {this.submitItem}>
                <input type="text" name="item" onChange={this.handleChanges} />
                <button>Add task</button>
            </form>
        );
    }




}

export default TodoForm;