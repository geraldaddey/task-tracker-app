import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Fetch a single task
  const fetchTask = async () => {
    const res = await fetch(`http://localhost:5000/tasks${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const addTask = (task) => {
    //   const id = Math.floor(Math.random() * 10000) + 1;
    //   const newTask = { id, ...task };
    //   setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    // to delete from the server

    setTasks(tasks.filter((task) => task.id !== id));
    console.log("deleted " + id);
  };

  // Toggle Reminder **************************************
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
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
