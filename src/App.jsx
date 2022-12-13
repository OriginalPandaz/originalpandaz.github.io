import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-info">
          <h1>Derek Hoang</h1>
          <h2>FullStack Developer / Software Engineer</h2>
        </div>
        <div className="links">
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
          <a
            href="https://drive.google.com/file/d/1NlKe2L163AUHvTvhWxwkrPvMCKMFC8jm/view?usp=sharing"
            target={"_blank"}
          >
            <li>
              <i
                title="Resume"
                className="fa fa-file"
                style={{ fontSize: "2em", color: "#fff" }}
              ></i>
            </li>
          </a>
        </div>
      </header>
      <main>
        <h2>Projects</h2>
      </main>
    </div>
  );
}

export default App;
