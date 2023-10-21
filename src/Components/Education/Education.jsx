import React from 'react'

const Education = () => {
    const educationData = [
        {
          schoolName: 'Maharaja Surajmal Institute of Technology',
          degree: 'B.tech in Computer Science and Engineering',
          grades:'9.353(upto 4th sem)',
          graduationYear: 2025,
          image: 'msit.png', 
        },
        
      ];
    
  return (
    <div id='education'>
        
          <br/>
          <br/>
          <br/>
      <h1 className="mb-4 text-center text-decoration-underline">Education</h1>
      <div className="row">
          <div className='text-center'>
          {educationData.map((education, index) => (
        <div key={index} className="mb-4">
          <div className="row">
            <div className="col-md-12">
              <h2>{education.schoolName}</h2>
              <img
                src={education.image}
                alt={education.schoolName}
                className="img-fluid rounded"
                style={{height:'18rem'}}
              />
             
              <h4 className="mb-2">{education.degree}</h4>
              <h4>🧑‍🎓Graduated in {education.graduationYear}</h4>
              <p>CGPA: {education.grades}</p>
            </div>

          </div>
        </div>
      ))} 
            </div>
            </div>
       
     
    </div>
  )
}
export default Education
