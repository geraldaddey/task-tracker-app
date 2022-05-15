import React from "react";
import Button from "./Button";
import Task from "./Task";
import Tasks from "./Tasks";

const author = "Gerald Addey";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <header className="header">
      <h1> {title}</h1>
      {/* <h1>by {author} </h1> */}
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
