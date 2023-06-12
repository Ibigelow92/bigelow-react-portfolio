import React from 'react';
import ProjectItem from "../components/ProjectItem";
import CodeQuiz from "../assets/code-quiz-screenshot-4-3.jpg";
import ColdSteel from "../assets/cold-steel-products-4-3.jpg";
import HTMLElements from "../assets/html-elements-screenshot-4-3.jpg";
import JackJohnsonTribute from "../assets/jack-johnson-tribute-screenshot-4-3.jpg";
import PatientExperienceSurvey from "../assets/patient-experience-screenshot-4-3.jpg";
import SafeTravels from "../assets/safe-travels-screenshot-4-3.jpg";
import MagicEatball from "../assets/magic-eatball.jpg";

import "../styles/Projects.css";

function Projects() {
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="projectList">
                <ProjectItem name="Code Quiz" image={CodeQuiz} />
                <ProjectItem name ="Cold Steel Product Page" image ={ColdSteel} />
                <ProjectItem name ="HTML Documentation Page" image ={HTMLElements} />
                <ProjectItem name ="Jack Johnson Tribute Page" image ={JackJohnsonTribute} />
                <ProjectItem name ="Patient Experience Survey Form" image ={PatientExperienceSurvey} />
                <ProjectItem name="Crime Score API App" image={SafeTravels} />
                <ProjectItem name="Magic Eatball" image={MagicEatball} />
            </div>
        </div>
    );
}

export default Projects