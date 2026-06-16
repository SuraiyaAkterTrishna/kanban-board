import Tasks from "./Tasks";

export default function TaskBoard() {
  return (
    <div class="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div class="flex flex-col gap-6 xl:flex-row h-full">
        <Tasks></Tasks>
        <Tasks></Tasks>
        <Tasks></Tasks>
      </div>
    </div>
  );
}
