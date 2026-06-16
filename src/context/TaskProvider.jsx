import { useReducer } from "react";
import { initialState, TaskReducer } from "../reducer/TaskReducer";
import { TaskContext } from "./TaskContext";


export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;