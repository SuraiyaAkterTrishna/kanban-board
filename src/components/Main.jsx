import Header from "./Header";
import TaskBoard from "./Tasks/TaskBoard";

export default function Main(){
    return (
        <main className="flex-1 flex flex-col min-h-0">
            <Header></Header>
            <TaskBoard></TaskBoard>
        </main>
    );
}