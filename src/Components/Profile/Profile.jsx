import React from "react";

const profiles = [
  {
    link: "https://auth.geeksforgeeks.org/user/kshitiz01sharma",
    title: "Geeks For Geeks",
    image: 'GFG.png',
    line: 'Solved more than 300 Questions on Geeks For Geeks'
  },
  {
    link: "https://www.codingninjas.com/studio/profile/782f81a8-d5be-41b7-807b-58d99eff0188",
    title: "Code Studio",
    image: "CN.jpeg", 
    line: 'Solved more than 340 Questions on Coding Ninjas'
  },
  {
    link: "https://leetcode.com/kshitiz01sharma/",
    title: "LeetCode",
    image: 'LeetCode.png',
    line: 'Solved 75+ Questions on LeetCode'
  },
];

const Card = ({ link, title, image }) => {
  return (
    <div className="col-md-4" id="profiles">
      <div className="card text-center" style={{ height: "20rem", width: "18rem", backgroundColor: '#323232',color:'wheat' }}>
        <div className="image-container dim-on-hover">
        <img className="card-img-top" src={image} alt="Card cap" style={{ height: "14rem",cursor:'pointer'}} />

        </div>
        <div className="card-body">
          <h5 className="card-title h4 text-center">{title}</h5>
         
          <a href={link} className="btn btn-success">View Profile</a>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <center>
        <div className="container">
          <h1 className="text-center text-decoration-underline">My Coding Profiles</h1>
          <br />
          <br />
          <div className="row justify-content-center">
            {profiles.map((profile, index) => (
              <Card key={index} {...profile} />
            ))}
          </div>
        </div>
      </center>
    </div>
  );
};

export default Profile;
