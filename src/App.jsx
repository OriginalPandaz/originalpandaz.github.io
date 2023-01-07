import { Navbar } from "./Navbar";
import "./App.css";
import { Project } from "./Project";
import { AboutMe } from "./AboutMe";
import { Skill } from "./Skill";

function App() {
  return (
    <>
      <Navbar />
      <header className="header">
        <div className="banner-section">
          <h1>Derek Hoang</h1>
          <h2>Software Engineer / FullStack Developer</h2>
        </div>
      </header>
      <main>
        <AboutMe />
        <Project />
        <Skill />
      </main>
      <footer>
        <a href="https://www.github.com/OriginalPandaz" target={"_blank"}>
          <li>
            <i
              title="Github"
              className="fa fa-github"
              style={{ fontSize: "2em", color: "black" }}
            ></i>
          </li>
        </a>
        <a href="https://www.linkedin.com/in/derek22nd/" target={"_blank"}>
          <li>
            <i
              title="LinkedIn"
              className="fa fa-linkedin"
              style={{ fontSize: "2em", color: "#0a66c2" }}
            ></i>
          </li>
        </a>
        <a href="mailto:derekhoang19@gmail.com" target={"_blank"}>
          <li>
            <i
              title="Gmail"
              className="fa fa-google"
              style={{ fontSize: "2em", color: "#0a66c2" }}
            ></i>
          </li>
        </a>
      </footer>
    </>
  );
}

export default App;
