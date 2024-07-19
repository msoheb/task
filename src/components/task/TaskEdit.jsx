import { useState } from "react";

function TaskEdit() {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <form>
      <input type="text" value={task} onChange={handleChange} />
    </form>
  );
}

export default TaskEdit;
