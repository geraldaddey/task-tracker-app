import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ footerStyles }}>
      <p>Gerald Addey Copyright&copy; 2022</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

const footerStyles = {
  fontSize: "light",
  color: "grey",
};

export default Footer;
