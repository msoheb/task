import TaskShow from "./TaskShow";

function TaskList({ tasks }) {
  const renderedTask = tasks.map((task) => {
    return <TaskShow key={task.id} task={task.task} />;
  });
  return <div>{renderedTask}</div>;
}

export default TaskList;
