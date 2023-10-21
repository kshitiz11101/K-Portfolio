import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export const Typing = () => {
    const [text]=useTypewriter({
        words:[' a Frontend Developer',' a DSA Learner',' an Open Source Enthusiast'],
        loop:{},
        typeSpeed:140,
        deleteSpeed:140,
        
    })
  return (
    <div>
      <h1 style={{margin:'5px'}}>
        I'm 
        <span style={{fontWeight:'bold',color:' rgb(143, 42, 237)'}}>

        {text }
        </span>
        <Cursor />
        </h1>
    </div>
  )
}

