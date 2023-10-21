import React from 'react'
import {Typing} from './Typing';
import Lottie from 'lottie-react';
import animation from '../../animation.json'

const Home = () => {
   
      const social=[
        {
          link:'https://linkedin.com/in/kshitiz sharma',
          icon:'fa-brands fa-linkedin'
        },
        {
          link:'https://twitter.com/kshitiz24451721',
          icon:'fa-twitter'
        },
      
        {
          link:'https://instagram.com/_kshitiz__sharma',
          icon:'fa-instagram'
        }
      ]
        return (
            
            <div className='row' id='home' >
              <br/>
                        <div className="col-12 col-md-6 " style={{marginLeft:'2rem'}} >
                            <h1 style={{fontSize:'4rem'}}>Hi 
                             I'm <b style={{color:'#cd6e24',fontFamily:'Dancing Script'}}>Kshitiz Sharma 
                             <span className="waving-hand">👋</span>
                             </b>
                             </h1>
                         <Typing style={{fontSize:'3rem'}}/>
                         <br/>
                         {social.map((s,index)=>(
                          <div className='ml-3' key={index} style={{display:'inline-block',marginRight:'13px'}}>
                          <a  href={s.link}> 
                       <i className={`fa ${s.icon}`} style={{fontSize:'40px'}}></i>
                       </a>
                          </div> 
                         ))}
                         <br/>
                         <br/>
                         <a href='https://drive.google.com/file/d/1dQ6HiPYvaSQBWip3rPVqLb3p5WMY9mij/view' className='btn btn-success' style={{boxShadow:'3px 3px 3px rgb(192, 236, 221)',fontSize:'25px'}}>
                         <i class="fa-solid fa-link" ></i>
                            Resume</a>
                        </div>
                        <div className="col-12 col-md-4">
            <Lottie animationData={animation} />
          </div>
                      <Lottie/>     
                    </div>
                
                
            
        );
    };

export default Home
