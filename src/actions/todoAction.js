import { ADD_TODO } from "./actionTypes";
import { ADD_NAME } from "./actionTypes";

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo: todo
    };
};

export const addName = (name) => {
    return {
        type: ADD_NAME,
        name: name
    };
};