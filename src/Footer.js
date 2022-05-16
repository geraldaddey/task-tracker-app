import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer style={{ footerStyles }}>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};
const footerStyles = {
  fontSize: "light",
  color: "grey",
};

export default Footer;
