import { Link } from "react-router-dom";

const NewFooter = () => {
  return (
    <footer>
      <p style={{ footerStyles }}> Gerald Addey </p>
      <p>Copyright &copy; 2022</p>
      <Link to="/about">About Us</Link>
    </footer>
  );
};

const footerStyles = {
  color: "grey",
  fontWeight: "light",
};

export default NewFooter;
