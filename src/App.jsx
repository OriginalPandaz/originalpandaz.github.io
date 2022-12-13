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
        <img
          src="/assets/projects.png"
          alt="EmailFaster"
          title="EmailFaster"
          className="projects-header"
        ></img>
        <div className="row">
          <div className="column">
            <img
              src="/assets/family.png"
              alt="Family Connect"
              title="Family Connect"
            ></img>
            <ul className="description">
              <li>
                Developed a mobile application that allows users to share their
                location
              </li>
              <li>
                Leveraged Firebase Authentication to implement secure Google
                login and sign up
              </li>
              <li>
                Queried the user’s real-time location and shared upon contacts
                using Firebase Realtime Database
              </li>
              <li>
                Utilized Google’s Map API to provide a dynamic map view of the
                users’ locations
              </li>
              <li>
                Implemented a marker selector to provide color options to easily
                identify contacts
              </li>
            </ul>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://play.google.com/store/apps/details?id=com.family.connect&pli=1",
                  "_blank"
                );
              }}
              type="button"
            >
              Google Playstore
            </button>
          </div>
          <div className="column">
            <img
              src="/assets/email.png"
              alt="EmailFaster"
              title="EmailFaster"
            ></img>
            <ul className="description">
              <li>
                Developed a web application to auto-populate template emails
              </li>
              <li>
                Achieved faster rendering time through static web pages and
                dynamically generated emails based on the user’s XML data
              </li>
              <li>
                Utilized the browser’s local storage to cache templates for
                future usage and reduce retrieval time
              </li>
              <li>
                Engineered with Vite for faster development and ensured type
                safety using TypeScript
              </li>
            </ul>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://github.com/OriginalPandaz/EmailFaster",
                  "_blank"
                );
              }}
              type="button"
            >
              Github
            </button>
          </div>
          <div className="column">
            <img
              src="/assets/bronco.png"
              alt="Bronco More Direct"
              title="Bronco More Direct"
            ></img>
            <ul className="description">
              <li>
                Engineered a more informative version of the web application
                Bronco Direct class scheduler
              </li>
              <li>
                Cached class schedules and professor ratings in DynamoDB to
                increase the query retrieval by 80%
              </li>
              <li>
                Implemented web scraping in AWS Lambda function calls for API
                calls used by the front-end application
              </li>
              <li>
                Provided scalable and reliable database through AWS DynamoDB
              </li>
            </ul>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://github.com/OriginalPandaz/Bronco-More-Direct",
                  "_blank"
                );
              }}
              type="button"
            >
              Github
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
