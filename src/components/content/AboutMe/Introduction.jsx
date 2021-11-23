import React from 'react';
import headshotPhoto from '../../../media/headshot.jpg';
import './Introduction.scss';

const Introduction = () => (
  <div className="introduction" id="introduction">
  <div className="left">
    <div className="wrapper">
      <h1>
        About Me
      </h1>
      <h3>Hi there, my name is Michael. I am a Software Engineer located in the Kansas City Area.
        <br/><br/>
        I graduated from Kansas State University with a B.S. in Computer Science and
        Johnson County Community College with an A.A.S in General Sciences.
        <br/><br/>
        Currently, I am employed by Cerner where I have multiple years experience
        in web application and mobile development.
        I have worked on a multitude of corporate projects as well personal ones.
        My interests outside of Software Engineering are
        Semi-Conductors, Investing/Finance, and Skateboarding.
      </h3>
    </div>
  </div>
  <div className="right">
    <div className="imgContainer">
      <img src={headshotPhoto} alt="Headshot Photo" />
    </div>
  </div>
</div>
);

export default Introduction;
