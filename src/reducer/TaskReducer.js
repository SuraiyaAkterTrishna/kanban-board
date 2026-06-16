import { tasks } from "../data/tasks";

export const initialState = {
    tasks,
}

export const TaskReducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
}