
import { useTaskContext } from "../hooks/useTaskContext";
import Tasks from "./Tasks";

export default function TaskBoard() {

  const {tasks} = useTaskContext();
  console.log(tasks);
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        <Tasks></Tasks>
        <Tasks></Tasks>
        <Tasks></Tasks>
      </div>
    </div>
  );
}
