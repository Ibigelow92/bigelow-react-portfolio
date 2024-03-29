import React from 'react'
import "../styles/Home.css";

function Home() {
    return <div className="home">
        <div className="about">
            <h2> Hello! I'm Ira Bigelow</h2>
            <div className="prompt">
                <p>Welcome to my portfolio!</p>
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