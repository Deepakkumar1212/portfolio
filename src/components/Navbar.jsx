
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function Navbar({theme, setTheme, menu, setMenu}) {
  

  const handleTheme = () => {
    setTheme(!theme);
  }

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <>
      <nav className="nav" >
        <div className="left">
          
        </div>
        <ul className={menu ? "hide" : "show"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/skill">Skills</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
        </ul>
        <div className="icons">
           <button onClick={handleTheme} className="themeColor"> {theme ? <BiSolidSun />: <BiSolidMoon  />}</button>
            <button onClick={handleMenu} className="menuIcon">{menu ? <IoMenu /> : <RxCross2 />}</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
