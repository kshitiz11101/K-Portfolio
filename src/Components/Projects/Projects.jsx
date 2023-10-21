import React from 'react'
const projectData = [
  {
     title: 'Spotify Clone',
     description: 'Implemented a user-friendly and responsive user interface that closely resembles the Spotify music streaming platform, providing an immersive music listening experience.',
     image: 'Spotify.png', 
     link: 'https://kshitiz11101.github.io/Spotify-Clone/',
     github: 'https://github.com/kshitiz11101/Spotify-Clone',
     stack:'#Html #Css #JavaScript'
   },
   {
     title: 'Weather App',
     description: 'Implemented geolocation functionality to automatically detect and display weather information for the user\'s current location. Integrated the OpenWeatherMap API to fetch real-time weather data and display it to users, providing accurate weather information.',
     image: 'Weather1.png', 
     link: 'https://weather-app-drab-seven.vercel.app/',
     github: 'https://github.com/kshitiz11101/Weather-App',
     stack:'#Reactjs  #Semantic UI'
   },
   {
     title: 'Pizza Hut Clone',
     description: 'Developed a fully functional Pizza Hut Clone web application. Incorporated RazorPay payment gateway integration, enabling customers to make online payments using credit cards or other preferred methods, enhancing user convenience.',
     image: 'Pizza.png', 
     link: 'https://kshitiz11101.github.io/Pizza-Hut-Clone/',
     github: 'https://github.com/kshitiz11101/Pizza-Hut-Clone',
     stack:'#Html #Css #Bootstrap #Javascript'
   },
 ];
 const Card=({title,description,image,link,github,stack})=>{
  return(
<div className="col-md-4" id="profiles">
  <div className="card text-center" style={{ height: "40rem", width: "18rem", backgroundColor: '#323232',color:'white' }}>
    <div className="image-container dim-on-hover">
    <img className="card-img-top" src={image} alt="Card cap" style={{ height: "14rem",cursor:'pointer'}} />

    </div>
    <div className="card-body">
      <h3 className="card-title h4 text-center text-decoration-underline mb-4">{title}</h3>
      <p className="card-text" style={{color:'white',fontFamily:'Raleway'}}>{description}</p>
      <h5 className="card-text btn btn-secondary mb-4" style={{fontFamily:'poppins'}}>{stack}</h5>
      <a href={link} className="btn btn-primary" style={{marginRight:'12px'}}>
      <i class="fa-solid fa-link" ></i>
        Demo</a>
      <a href={github} className="btn btn-success"><i className='fab fa-github'></i>Github</a>
    </div>
  </div>
</div>
  )
  
 }
const Projects = () => {
  
  return (
    <div >
      <center>
        <div className="container">
          <br/>
          <br/>
          <h1 className="text-center text-decoration-underline">Projects</h1>

<br/>
<br/>
        </div>
        <div className='row justify-content-center'>
          {projectData.map((proj,index)=>(
            <Card key={index} {...proj}/>
          ))}
        </div>
      </center>
    </div>
  )
}

export default Projects
