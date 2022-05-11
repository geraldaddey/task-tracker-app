import Header from "./components/Header";

function App() {
  const name = "Gerald";
  return (
    <div className="container">
      <h1>Let's Get this Money!</h1>
      <h2 style={headingStyle}>You deserve it {name}.</h2>
      <Header title="Hello" />
    </div>
  );
}

// How to Use CSS in JS
const headingStyle = {
  color: "red",
  backgroundColor: "black",
  width: "250px",
  textAlign: "center",
  margin: "0 auto",
};

export default App;
