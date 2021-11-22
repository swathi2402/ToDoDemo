import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoAction";
import store from "../store";
import My from "./My";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            todo: "",
        };
    }

    render() {
        return (
            <div>
                <input value={this.state.todo} onChange={(event) => this.setState({ todo: event.target.value })} />
                <button onClick={this.addTodo}>Add</button>
                <p>Todo List</p>
                <My />
                {this.props.todos.map((todo, index) => (
                    <p key={index}>{todo}</p>
                ))}
            </div>
        );
    }

    addTodo = () => {
        store.dispatch(addTodo(this.state.todo));
    };
}

const mapStateToProps = (store) => {
    return {
        todos: store.todos,
    };
};

export default connect(mapStateToProps)(Main);