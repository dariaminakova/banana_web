import { Link } from "react-router-dom";
import { LINKS_TITLE } from "./constants";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to={LINKS_TITLE.default}>Home</Link>
      <Link to={LINKS_TITLE.menu}>Menu</Link>
      <Link to={LINKS_TITLE.gallery}>Gallery</Link>
      <Link to={LINKS_TITLE.about}>About</Link>
      <Link to={LINKS_TITLE.contact}>Contact</Link>
    </nav>
  );
};

export default Navbar;
