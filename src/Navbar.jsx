export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#">
        <img className="navbar-icon" src="/assets/home_image.png"></img>
      </a>
      <ul>
        <li>
          <a href="#" className="link-sections">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="link-sections">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="link-sections">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
