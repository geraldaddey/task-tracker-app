import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, day: "June 4th", text: "dental appointment", reminder: true },
    { id: 2, day: "Feb 15th", text: "gym session", reminder: true },
    { id: 3, day: "April 29th", text: "road trip", reminder: true },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("deleted " + id);
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
  };

  // const name = "Gerald";
  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}
// How to Use CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
//   width: "250px",
//   textAlign: "center",
//   margin: "0 auto",
// };

export default App;
