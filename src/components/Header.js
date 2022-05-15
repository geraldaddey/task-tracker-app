import React from "react";
import Button from "./Button";
// import Task from "./Task";
// import Tasks from "./Tasks";

// const author = "Gerald Addey";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1> {title}</h1>
      {/* <h1>by {author} </h1> */}
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
