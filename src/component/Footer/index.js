import React from 'react';
import Email from '../../assets/email-white.png';
import Github from '../../assets/github-white.png';
import LinkedIn from '../../assets/linkedin-white.png';

function About() {
    return (
       <footer>
           
           <div>
            <img src={Email} alt="email-link"/>
            <img src={Github} alt="github-link"/>
            <img src={LinkedIn} alt="linkedin-link"/>
           </div>
           
           </footer>
    )
};

export default About;