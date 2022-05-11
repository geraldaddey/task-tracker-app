import Header from "./components/Header";

function App() {
  const name = "Gerald";
  return (
    <div className="container">
      <Header title="Task Tracker" />
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
