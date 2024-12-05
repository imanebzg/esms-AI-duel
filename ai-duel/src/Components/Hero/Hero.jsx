import React from 'react';
import './Hero.css'; 


const Hero = () => {
 
  return (
    <div id="welcome">
        <img src="/img/stai.svg" id="evname" alt="Event Name"/>
        <img src="/img/Group 6.png" id="wel" alt="Pic"/>
        <h2 id="wh">Welcome to I VS FI !</h2>
        <p id="wp"> A thrilling competition where Artificial Intelligence faces its vulnerabilities  
        Test your skills by bypassing AI models designed to challenge the boundaries of security. 
       </p>
       {/*<p id="wq">Are you ready to uncover the unseen?</p>*/}

    </div>
  )
};
    

export default Hero;
