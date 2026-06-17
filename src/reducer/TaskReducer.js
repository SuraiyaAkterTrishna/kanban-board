import { tasks } from "../data/tasks";

export const initialState = {
    tasks,
    filterTags: {
        'to-do': '',
        'in-progress': '',
        'done': ''
    }
}

export const TaskReducer = (state, action) => {
    switch (action.type) {
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
        case "FILTER_TASKS": {
            const { status, tag } = action.payload;
            return {
                ...state,
                filterTags: {
                    ...state.filterTags,
                    [status]: tag
                }
            }
        }
        default:
            return state;
    }
}