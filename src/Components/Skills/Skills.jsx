
import React from 'react'

const Skills = () => {
  const languages=[
        {
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        title: "C"
        },
        {
        icon: "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/skills/cpp.svg",
        title: "C++"
        },
        {
        icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
        title: "C++"
        },
    ]
    
        const web=[
            {
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                title: "C++"
                },
                {
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                title: "C++"
                },
                {
                icon: "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/skills/javascript.svg",
                title: "JavaScript"
                },
                {
                icon: "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/skills/react.svg",
                title: "C++"
                },
                {
                icon: "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/skills/nodejs.svg",
                title: "C++"
                },
                {
                icon: "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/skills/express.svg",
                title: "C++"
                },
                {
                icon: "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/skills/mongodb.svg",
                title: "C++"
                },
                {
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                title: "C++"
                },
              
        ]
      const tool=[
          {
            icon: "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/skills/git.svg",
            title: "C++"
            },
            {
            icon: "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/skills/github.svg",
            title: "C++"
            },
            {
            icon: "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/skills/postman.svg",
            title: "C++"
            },
        ]
       
    
   
  return (
    <div>
  <div className="text-center" id='skills'>
    <h1 className="mb-4 text-decoration-underline">Skills</h1>
  </div>
  <div className="row text-center">
    <h3 style={{fontFamily:'Permanent Marker'}}>Languages</h3>

    {languages.map((language, index) => (
      <div key={index} className="col-md-4 mt-4 p-4">
        <div className="text-center cursor-pointer">
          <img
            src={language.icon}
            alt={language.title}
            className="img-fluid"
            style={{ height: '6rem', width: '6rem' }}
          />
         
        </div>
      </div>
    ))}
  </div>

  <div className='row text-center mb-4'>
    <h3 style={{fontFamily:'Permanent Marker'}}>Web Technologies</h3>

    {web.map((myweb, index) => (
      <div key={index} className='col-md-3 mt-5 p-2'>
        <div className='text-center cursor-pointer'>
          <img
            src={myweb.icon}
            alt={myweb.title}
            style={{ height: '6rem', width: '6rem' }}
          />
         
        </div>
      </div>
    ))}
  </div>
  <div className='row text-center mb-4'>
<h3 style={{fontFamily:'Permanent Marker'}}>Tools</h3>
{tool.map((mytool,index)=>(
  <div key={index} className='col-md-4 mt-4 p-4'>
 <div className='text-center cursor-pointer'>
  <img 
  src={mytool.icon}
  alt={mytool.title}
  style={{ height: '6rem', width: '6rem' }}
  />
 </div>
  </div>
))}
  </div>
</div>

  )
}

export default Skills
