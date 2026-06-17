
import { useTaskContext } from "../hooks/useTaskContext";
import Tasks from "./Tasks";

export default function TaskBoard() {

  const {tasks} = useTaskContext();
 
  const todoTasks = tasks.filter(task => task.status === "to-do");
  const inProgressTasks = tasks.filter(task => task.status === "in-progress");
  const doneTasks = tasks.filter(task => task.status === "done");
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        <Tasks title="To-do" tasks={todoTasks} status="to-do"></Tasks>
        <Tasks title="In Progress" tasks={inProgressTasks} status="in-progress"></Tasks>
        <Tasks title="Done" tasks={doneTasks} status="done"></Tasks>
      </div>
    </div>
  );
}
