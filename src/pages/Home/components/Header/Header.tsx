import { banner } from "../../../../assets/assets";
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
      <img src={banner} alt='' />
    </header>
  );
};

export default Header;
