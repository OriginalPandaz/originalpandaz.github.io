import { useState } from "react";

export function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className={clicked ? "navbar-resp" : "navbar"}>
      <a href="#">
        <img className="navbar-icon" src="/assets/home_image.png"></img>
      </a>
      <ul className={clicked ? "navbar-active" : "navbar-inactive"}>
        <li className="navbar-link">
          <a href="#" className="link-sections">
            Home
          </a>
        </li>
        <li className="navbar-link">
          <a href="#about" className="link-sections">
            About
          </a>
        </li>
        <li className="navbar-link">
          <a href="#projects" className="link-sections">
            Projects
          </a>
        </li>
      </ul>
      <div className="navbar-dropdown">
        <i
          onClick={() => setClicked(!clicked)}
          className={clicked ? "fa fa-times" : "fa fa-bars"}
        ></i>
      </div>
    </nav>
  );
}
