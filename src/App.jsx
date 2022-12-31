import { Navbar } from "./Navbar";
import "./App.css";

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
        <div id="about" className="about-section">
          <div className="container">
            <h1>About Me</h1>
            <div className="about-me">
              <img src="/assets/derek_hoang.jpeg"></img>
              <div className="about-me-description">
                <h3>
                  Hi, I'm Derek. I am an avid gamer, bowler, and problem-solver.
                </h3>
                <p>
                  I also am a Software Engineer / Full Stack Developer that is
                  willing to take on new challenges.
                </p>
                <p>
                  I am recent graduate from{" "}
                  <span style={{ color: "#2a457e", fontWeight: "bold" }}>
                    California State Polytechnic University, Pomona{" "}
                  </span>
                  as a Computer Science major.
                </p>
                <p>
                  Over the course of my life and career I have developed
                  expertise in several areas of web development and design. I am
                  seeking to continue this growth by opening myself for
                  opportunities which are guaranteed to challenge me.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="project-section">
          <h1>Projects</h1>
          <div className="container">
            <div className="project-cards">
              <div className="card">
                <h2 className="card-title">Family Connect</h2>
                <ul>
                  <li>
                    Developed a mobile application that allows users to share
                    their location
                  </li>
                  <li>
                    Leveraged Firebase Authentication to implement secure Google
                    login and sign up
                  </li>
                  <li>
                    Queried the user’s real-time location and shared upon
                    contacts using Firebase Realtime Database
                  </li>
                  <li>
                    Utilized Google’s Map API to provide a dynamic map view of
                    the users’ locations
                  </li>
                  <li>
                    Implemented a marker selector to provide color options to
                    easily identify contacts
                  </li>
                </ul>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.family.connect"
                target={"_blank"}
              >
                <button className="project-button">Google Playstore</button>
              </a>
              <div className="card">
                <h2 className="card-title">EmailFaster</h2>
                <ul>
                  <li>
                    Developed a web application to auto-populate template emails
                  </li>
                  <li>
                    Achieved faster rendering time through static web pages and
                    dynamically generated emails based on the user’s XML data
                  </li>
                  <li>
                    Utilized the browser’s local storage to cache templates for
                    future usage and to reduce retrieval time
                  </li>
                  <li>
                    Engineered with Vite for faster development and ensured type
                    safety using TypeScript
                  </li>
                </ul>
              </div>
              <div className="project-button-section">
                <a
                  href="https://github.com/OriginalPandaz/EmailFaster/"
                  target={"_blank"}
                >
                  <button className="project-button">GitHub</button>
                </a>
                <a
                  href="https://originalpandaz.github.io/EmailFaster/"
                  target={"_blank"}
                >
                  <button className="project-button">Web Application</button>
                </a>
              </div>
              <div className="card">
                <h2 className="card-title">Student Calendar</h2>
                <ul>
                  <li>
                    Created a student calendar web application using React.js
                    that auto-generates class schedules to a certain time period
                  </li>
                  <li>
                    Deployed REST API built with Node.js, Express.js, and
                    MongoDB to AWS for user authentication and data access
                  </li>
                  <li>
                    Provided secure user registration by hashing user’s
                    credentials using Bcrypt
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2 className="card-title">Bronco More Direct</h2>
                <ul>
                  <li>
                    Engineered a more informative version of the web application
                    Bronco Direct class scheduler
                  </li>
                  <li>
                    Cached class schedules and professor ratings in DynamoDB to
                    increase query retrieval by 80%
                  </li>
                  <li>
                    Implemented web scraping in AWS Lambda function calls for
                    API calls used by the front-end application
                  </li>
                  <li>
                    Provided scalable and reliable database through AWS DynamoDB
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/OriginalPandaz/Bronco-More-Direct"
                target={"_blank"}
              >
                <button className="project-button">Github</button>
              </a>
              <div className="card">
                <h2 className="card-title">Weather Web App</h2>
                <ul>
                  <li>
                    Utilized open-source weather API to retrieve data for
                    front-end web applicaition
                  </li>
                  <li>
                    Requests the usage of the user's geolocation to relevant
                    weater data for the user
                  </li>
                  <li>
                    Provides daily weather and hourly weather based on user's
                    location and made responsive for all device screens
                  </li>
                </ul>
              </div>
              <div className="project-button-section">
                <a
                  href="https://github.com/OriginalPandaz/weather-app"
                  target={"_blank"}
                >
                  <button className="project-button">Github</button>
                </a>
                <a
                  href="https://originalpandaz.github.io/weather-app/"
                  target={"_blank"}
                >
                  <button className="project-button">Web Application</button>
                </a>
              </div>
              <div className="card">
                <h2 className="card-title">Bomberman</h2>
                <ul>
                  <li>
                    Built the single-player game Bomberman in C++ and utilized
                    Simple Fast and Multimedia (SFML) library to implement the
                    game mechanics and UI
                  </li>
                  <li>
                    Configured enemy's "hit detection" using SFML Pixel Perfect
                    Collision which allowed the automation of the AI's movement
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/OriginalPandaz/Bomberman"
                target={"_blank"}
              >
                <button className="project-button">Github</button>
              </a>
            </div>
          </div>
        </div>
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
