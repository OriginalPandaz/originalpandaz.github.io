export function Project() {
  return (
    <div id="projects" className="project-section">
      <h1>Projects</h1>
      <div className="container">
        <div className="project-cards">
          <div className="card">
            <h2 className="card-title">
              Family Connect
              <span className="project-date">Jan 2022</span>
            </h2>
            <ul>
              <li>
                Developed a mobile application that allows users to share their
                location with each other
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
                Utilized Google Maps API to provide a dynamic map view of the
                users’ locations
              </li>
              <li>
                Implemented a marker selector to provide color options to easily
                identify contacts
              </li>
            </ul>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.family.connect"
            target={"_blank"}
          >
            <button className="primary-project-button">Google Playstore</button>
          </a>
          <div className="card">
            <h2 className="card-title">
              EmailFaster
              <span className="project-date">Sept 2022</span>
            </h2>
            <ul>
              <li>
                Developed a web application to auto-populate template emails to
                replicate bulk emailing
              </li>
              <li>
                Achieved faster page rendering time through static web pages
              </li>
              <li>
                Dynamically generated emails based on the user’s XML data and
                template keywords
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
              <button className="primary-project-button">GitHub</button>
            </a>
            <a
              href="https://originalpandaz.github.io/EmailFaster/"
              target={"_blank"}
            >
              <button className="secondary-project-button">
                Web Application
              </button>
            </a>
          </div>
          <div className="card">
            <h2 className="card-title">
              Bronco More Direct
              <span className="project-date">Dec 2021</span>
            </h2>
            <ul>
              <li>
                Cached class schedules and professor ratings in DynamoDB to
                increase query retrieval by 80%
              </li>
              <li>
                Implemented web scraping AWS Lambda function calls with Python
                to send data to API Gateway calls
              </li>
              <li>
                Provided scalable and reliable data storage through the use of
                AWS DynamoDB
              </li>
            </ul>
          </div>
          <a
            href="https://github.com/OriginalPandaz/Bronco-More-Direct"
            target={"_blank"}
          >
            <button className="primary-project-button">Github</button>
          </a>
          <div className="card">
            <h2 className="card-title">
              Student Calendar
              <span className="project-date">Jan 2022</span>
            </h2>
            <ul>
              <li>
                Created a student calendar that helps keep track of tasks and
                class schedules
              </li>
              <li>
                Deployed REST API built with Express and NodeJS to AWS providing
                aggregated calendar data for users
              </li>
              <li>
                Utilized MongoDB to store and manage student calendar data,
                including events, assignments, and deadlines
              </li>
              <li>
                Implemented user authentication and authorization to restrict
                access to the calendar to authorized users by using Bcrypt
              </li>
            </ul>
          </div>
          <div className="card">
            <h2 className="card-title">
              Weather Web App
              <span className="project-date">Dec 2022</span>
            </h2>
            <ul>
              <li>
                Utilized the Open-Meteo API to gather and display real-time
                weather information
              </li>
              <li>
                Engineered the application to ensure mobile responsiveness and
                usability on a variety of devices
              </li>
              <li>
                Requests the usage of the user's geolocation to provide relevant
                weater data for the user
              </li>
            </ul>
          </div>
          <div className="project-button-section">
            <a
              href="https://github.com/OriginalPandaz/weather-app"
              target={"_blank"}
            >
              <button className="primary-project-button">Github</button>
            </a>
            <a
              href="https://originalpandaz.github.io/weather-app/"
              target={"_blank"}
            >
              <button className="secondary-project-button">
                Web Application
              </button>
            </a>
          </div>
          <div className="card">
            <h2 className="card-title">
              Bomberman<span className="project-date">Jan 2020</span>
            </h2>
            <ul>
              <li>
                Built the single-player game Bomberman in C++ and utilized
                Simple Fast and Multimedia (SFML) library to implement the game
                mechanics and UI
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
            <button className="primary-project-button">Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}
