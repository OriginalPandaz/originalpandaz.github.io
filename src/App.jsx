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
          <a href="https://github.com/OriginalPandaz" target={"_blank"}>
            <li>
              <i
                className="fa fa-github"
                style={{ fontSize: "2em", color: "black" }}
              ></i>
            </li>
          </a>
          <a href="https://github.com/OriginalPandaz" target={"_blank"}>
            <li>
              <i
                className="fa fa-linkedin"
                style={{ fontSize: "2em", color: "#0a66c2" }}
              ></i>
            </li>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
