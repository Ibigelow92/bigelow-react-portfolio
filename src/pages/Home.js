import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles.Home.css";

function Home() {
    return <div className="home">
        <div className="about">
            <h2> Hi, my name is Ira</h2>
            <div className="prompt">
                <p>and I am a beginning developer</p>
                <FacebookIcon />
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
            </div>
        </div>
        <div className="skills">

            <h2>Skills</h2>
            <ol className="list">
                <li className="item">
                    <h3>Front-end</h3>
                    <span>HTML, CSS, ReactJS, BootStrap</span>
                </li>
                <li className="item">
                    <h3>Back-end</h3>
                    <span>NodeJS, ExpressJS, MySQL, MongoDB, GraphQL, ApolloServer</span>
                </li>
            </ol>
        </div>
    </div>;
}

export default Home