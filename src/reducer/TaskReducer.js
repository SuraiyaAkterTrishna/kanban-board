import { tasks } from "../data/tasks";

export const initialState = {
    tasks,
}

export const TaskReducer = (state, action) => {
    switch (action.type){
        case "ADD_TASK": {
            const newTask = {
                ...action.payload,
                id: crypto.randomUUID(),
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }
        }
        default:
            return state;
    }
}