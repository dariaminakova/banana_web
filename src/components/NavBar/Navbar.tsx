import { Link } from "react-router-dom";
import { LINKS_TITLE } from "./constants";
import "./Navbar.css";
import { logoLeft, logoRight } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logoLeft} alt='Logo' className='navbar-logo' />
      <div className='navbar-links'>
        <Link to={LINKS_TITLE.default}>Home</Link>
        <Link to={LINKS_TITLE.menu}>Menu</Link>
        <Link to={LINKS_TITLE.gallery}>Gallery</Link>
        <Link to={LINKS_TITLE.about}>About</Link>
        <Link to={LINKS_TITLE.contact}>Contact</Link>
      </div>
      <div className='navbar-wrapper'>
        <img src={logoRight} alt='Icon' className='navbar-icon' />
        <span className='navbar-text'>Take me :)</span>
      </div>
    </nav>
  );
};

export default Navbar;
