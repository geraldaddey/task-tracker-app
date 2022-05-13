import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  //   const tasks = [
  //     { id: 1, day: "June 4th", text: "dental appointment", reminder: true },
  //     { id: 2, day: "Feb 15th", text: "gym session", reminder: true },
  //     { id: 3 , day: "April 29th", text: "road trip", reminder: true },
  //   ];
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={tasks.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
