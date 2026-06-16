import {createContext, useContext, useReducer} from 'react';
import { initialState, TaskReducer } from '../reducer/TaskReducer';

// ================= Create Context =================
const TaskContext = createContext();


// ==================== Provider ========================
export const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return (
        <TaskContext.Provider value={{tasks: state.tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if(!context){
        throw new Error("useTaskContext must be used within a TaskProvider");
    }
    return context;
}