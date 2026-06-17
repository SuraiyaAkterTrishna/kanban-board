import { useReducer } from "react";
import { initialState, TaskReducer } from "../reducer/TaskReducer";
import { TaskContext } from "./TaskContext";


export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const value = {
    tasks: state.tasks,
    filterTags: state.filterTags,
    dispatch
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;