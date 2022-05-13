const Task = ({ task }) => {
  return (
    <div className="task" style={taskStyling}>
      <p>{task.id}</p>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};

const taskStyling = {
  fontSize: "normal",
};

export default Task;
