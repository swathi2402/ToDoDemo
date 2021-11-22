import { ADD_TODO } from '../actions/actionTypes';
import { ADD_NAME } from '../actions/actionTypes';

const initialState = {
    todos: [],
    names: ""
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: return { ...state, todos: state.todos.concat(action.todo) };
        case ADD_NAME: return { ...state, names: state.names.concat(action.name) };
        default: return state;
    }
};

export default todoReducer;