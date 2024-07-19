import { useState } from "react";
import TaskList from "./components/task/TaskList";
import TaskCreate from "./components/task/TaskCreate";

function App() {
  const [tasks, setTasks] = useState([
    { id: 12212, task: "Create a Todo" },
    { id: 2213, task: "Bring Milk" },
  ]);

  const addTask = (task) => {
    const newTask = [
      ...tasks,
      { id: crypto.randomUUID(), task, status: "pending", priority: "low" },
    ];
    setTasks(newTask);
  };

  return (
    <main>
      <TaskCreate addTask={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
