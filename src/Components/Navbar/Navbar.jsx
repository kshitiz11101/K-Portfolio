import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

export const Navbar=()=> {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true' ? true : false
  );

 
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode'); 
    } else {
      body.classList.remove('dark-mode'); 
    }
  }, [isDarkMode]);
  return (
    
    <div >
     <nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    <a className="navbar-brand" >
   
      <h2 onClick={()=>window.location.reload()} style={{cursor:'pointer'}}>Kshitiz Sharma</h2>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:'22px',scrollBehavior:'smooth',fontFamily: 'Roboto Slab',fontWeight:"bold"}}>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href='#home'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About me</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link " href='#education'>Education</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link " href='#skills'>Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='#profiles'>Profiles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='#projects'>Projects</a>
        </li>
      </ul> 
      <a
              className="btn btn-dark"
              onClick={toggleDarkMode}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </a>
&ensp;
       <a className="btn btn-dark" href="https://github.com/kshitiz11101" target="_blank" rel="noopener noreferrer">
  <i class="fab fa-github"></i> 
</a>  
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar;

