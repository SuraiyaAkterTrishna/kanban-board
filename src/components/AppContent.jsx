import Main from "./Main";
import Sidebar from "./Sidebar";

export default function AppContent() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-60">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  );
}
