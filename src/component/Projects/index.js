import React from 'react';

function Projects({name}) {

    const projects = ([
        {
            name:"Travel.Map",
            skills: "JavaScript, HTML, CSS, and API",
            app: "https://khadra123.github.io/Travel.map/",
            repo: "https://github.com/khadra123/Travel.map"
        },
        {
            name: "LocalShop",
            skills: "JavaScrip, HTML, CSS, Node.js, Express.js, API, SQL, ORM & MVC",
            app: "https://shop-local-with-localshop.herokuapp.com/",
            repo: "https://github.com/chaitalizn/localshop"
        },
        {
            name: "Weather Dashboard",
            skills: "JavaScript, HTML, CSS, and API",
            app: "https://chaitalizn.github.io/weather-dashboard/",
            repo: "https://github.com/chaitalizn/weather-dashboard"
        },
        {
            name: "Taskinator",
            skills: "JavaScript, HTML, CSS, and API",
            app: "https://chaitalizn.github.io/taskinator/",
            repo: "https://github.com/chaitalizn/taskinator"
        },
        {
            name: "Portfolio",
            skills: "HTML, CSS",
            app: "https://chaitalizn.github.io/my-dev-portfolio-site/",
            repo: "https://github.com/chaitalizn/my-dev-portfolio-site"
        },
        {
            name: "Run-Buddy",
            skills: "HTML, CSS",
            app: "https://chaitalizn.github.io/run-buddy/",
            repo: "https://github.com/chaitalizn/run-buddy",
        }
    ])

    return (
        <section>
            {projects.map(project => (
            <div>
                <div>
                    <img
                    src={require(`../../assets/${project.name}.PNG`).default}
                    alt={project.name}
                    key={project.name}
                    />
                </div>
                <div>
                    <p>{project.name}</p>
                    <p>{`Technologies: ${project.skills}`}</p>
                    <p><a href={project.app} target="_blank" >View Application</a></p>
                    <p><a href={project.repo} target="_blank" >View GitHub Repository</a></p>
                </div>
            </div>
            ))}
        </section>
    )
}

export default Projects;