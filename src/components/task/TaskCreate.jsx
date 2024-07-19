import { useState } from "react";

function TaskCreate() {
  const [check, setCheck] = useState(false);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    console.log(task);
    setTask(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="checkbox"
          value={check}
          onChange={() => setCheck(!check)}
        />
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
