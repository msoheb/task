import { useState } from "react";

function TaskCreate({ addTask }) {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    console.log(task);
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default TaskCreate;
