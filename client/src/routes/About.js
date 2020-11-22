import React from "react";
import "./About.css";

function About() {
  return (
    <React.Fragment>
      <h1 className="about__title">The 20 Best Movies in Home</h1>
      <div className="about__container">
        <p>
          Bored at home? Me too. Do you REALLY wanna go outside? Me too.
          However, as staying home is the most effective way to prevent the
          further transmission of the coronavirus, it is meaningful to socially
          isolate.
        </p>
        <p>
          In these days, I watch a lot of movies in all genres to spend a boring
          time. There are so many movies I wanna suggest you. So, I list the Top
          20 movies in this app. Let's break the boredom!
        </p>
      </div>
      <span className="about__name">− Yeongbba −</span>
    </React.Fragment>
  );
}

export default About;
