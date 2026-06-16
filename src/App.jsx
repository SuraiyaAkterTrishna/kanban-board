import AppContent from "./components/AppContent";
import TaskProvider from "./context/TaskProvider";

export default function App() {
  return (
    <TaskProvider>
      <AppContent></AppContent>
    </TaskProvider>
  )
}
