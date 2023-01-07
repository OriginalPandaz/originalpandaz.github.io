export function AboutMe() {
  return (
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
              Over the course of my life and career I have developed expertise
              in several areas of web development and design. I am seeking to
              continue this growth by opening myself for opportunities which are
              guaranteed to challenge me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
