import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, day: "June 4th", text: "dental appointment", reminder: true },
    { id: 2, day: "Feb 15th", text: "gym session", reminder: true },
    { id: 3, day: "April 29th", text: "road trip", reminder: true },
  ]);
  // const name = "Gerald";
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
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
