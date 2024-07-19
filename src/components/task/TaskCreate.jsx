import { useState } from "react";

function TaskCreate() {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    console.log(task);
    setTask(event.target.value);
  };

  return (
    <div>
      <form>
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
