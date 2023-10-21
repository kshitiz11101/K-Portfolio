import React from "react";


const About = () => {
  return (
    <div className="container md-4" id="about">
      <div className="text-center">
        <br />
        <h1 className="underlined mb-4 text-decoration-underline">About Me</h1>
 <br/>

        <div className="row">
          <div className="col-12 col-md-6" style={{fontFamily:'Young Serif'}}>
            <h3>
              I'm a pre final year student pursuing Computer Science and
              Engineering from Maharaja Surajmal Institute of Technology. I'm a beginner
              in MERN Stack developement and would love to collaborate to build
              projects based on it. I've solved overall more than 400 questions
              on multiple coding platforms like geeksforgeeks, Leetcode and
              Coding Ninjas, etc. I'm looking for some internships opportunities
              in software development.
            </h3>
          </div>
          &ensp; &ensp;
          <div className="col-12 col-md-4">
            <img
              src="../Image.jpg"
              alt="Im"
              className="img-fluid dim-on-hover"
              style={{ height: "25rem", borderRadius: "1.5rem" ,cursor:'pointer'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
