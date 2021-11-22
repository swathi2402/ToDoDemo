import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoAction";
import { addName } from "../actions/todoAction";
import store from "../store";
import My from "./My";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            todo: "",
            name: "",
        };
    }

    render() {
        return (
            <div>
                <div>                 
                    <input value={this.state.todo} onChange={(event) => this.setState({ todo: event.target.value })} />
                    <button onClick={this.addTodo}>Add</button>
                    <p>Todo List</p>
                    {this.props.todos.map((todo, index) => (
                        <p key={index}>{todo}</p>
                    ))}
                </div>
                <div>
                    <input value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                    <button onClick={this.addName}>Name</button>
                </div>
                <My />
            </div>
        );
    }

    addTodo = () => {
        store.dispatch(addTodo(this.state.todo));
    };

    addName = () => {
        store.dispatch(addName(this.state.name));
    }
}

const mapStateToProps = (store) => {
    return {
        todos: store.todos,
        names: store.names,
    };
};

export default connect(mapStateToProps)(Main);