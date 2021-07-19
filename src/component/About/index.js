import React from 'react';
import profileImage from '../../assets/profilepic.png';

function About() {
    return (
        <section className="about row d-flex justify-content-center align-items-center
        ">
            <div className="col-4">
                <img src={profileImage} alt="chaitali patel photo" />
            </div>
            <div className="col-6">
                <h1 id="about"> Hi, 
                <br /> <span className="highlightName">I'M CHAITALI PATEL.</span>
                <br /> Web Developer
                </h1>
                <hr/>
                <p>
                I am highly self-motivated Full Stack Web Developer with knowledge and proficiency in JavaScript, HTML, CSS, MERN and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code, unit testing and debugging.
                Exceptional collaborative and interpersonal skills; dynamic team player with excellent communication abilities. Results-orientated professional accustomed to surpassing expectations in deadline-driven environments.
                </p>
            </div>
        </section>
    )
};

export default About;