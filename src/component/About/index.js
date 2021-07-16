import React from 'react';
import profileImage from '../../assets/chaitali-patel-photo.png';

function About() {
    return (
        <section>
            <img src={profileImage} alt="chaitali patel photo" />
            <h1 id="about"> Hi, 
            <br /> <span className="highlightName">I'M CHAITALI PATEL.</span>
            <br /> Web Developer
            </h1>
            <hr/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar nisl quis ex cursus sollicitudin. Mauris eu elit non ligula rutrum venenatis. Praesent id sodales leo. Quisque aliquam blandit eros a gravida.  Sed venenatis, leo id tincidunt molestie, risus lorem ornare lorem, nec pellentesque est eros vitae turpis. Praesent nisl nulla, maximus quis est et, hendrerit semper nisl.
            </p>
        </section>
    )
};

export default About;