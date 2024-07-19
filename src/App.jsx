import { useState } from "react";
import TaskList from "./components/task/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 12212, task: "Create a Todo" },
    { id: 2213, task: "Bring Milk" },
  ]);
  return (
    <main>
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
