import { ADD_TODO } from '../actions/actionTypes';

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: return { ...state, todos: state.todos.concat(action.todo) };
        default: return state;
    }
};

export default todoReducer;