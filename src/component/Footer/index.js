import React from 'react';
import Email from '../../assets/email-white.png';
import Github from '../../assets/github-white.png';
import LinkedIn from '../../assets/linkedin-white.png';

function About() {
    return (
       <footer>
           
           <div className="row d-flex justify-content-end p-3">
            
            <div className="col-2 p-2" >
            <a className="m-2" href="mailto:phchaitali3@gmail.com">
                <img src={Email} alt="email-link"/>
                </a>
            <a className="m-2" href="https://github.com/chaitalizn">
                <img src={Github} alt="github-link"/>
                </a>
            <a className="m-2" href="www.linkedin.com/in/pchaitali">
                <img src={LinkedIn} alt="linkedin-link"/>
                </a>
            </div>
           </div>
           
           </footer>
    )
};

export default About;