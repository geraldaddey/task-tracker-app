import React from "react";
import Button from "./Button";

const author = "Gerald Addey";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1> {title}</h1>
      {/* <h1>by {author} </h1> */}
      <Button />
    </header>
  );
};

export default Header;
