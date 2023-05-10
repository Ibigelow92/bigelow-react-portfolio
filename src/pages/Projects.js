import React from 'react';
import ProjectItem from "../components/ProjectItem";
// import { ProjectList } from "../helpers/ProjectList";
import SafeTravels from "../assets/safe-tracels-screenshot-4-3.jpg"

// import "../styles.Projects.css"

function Projects() {
    return <div className="projects">
        <h2>My Projects</h2>
        <div className="projectList">
            {/* {projectList.map((project, idx) => {
                return (
                    <projectItem id={idx} name={project.name} image={project.image}/>
                )
            })} */}
            <ProjectItem name="SafeTravels" img={SafeTravels}/>
        </div>
    </div>;
}

export default Projects