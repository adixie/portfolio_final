import React from "react";
import { Link } from "react-router-dom";
import './Projects.css';

const Projects = (props) => {

    return (

        <>

            <div className="projectContainer">
                <div>
                    <div className="projectDiv">
                        <h4>Web Pub Website</h4>
                        <br></br>
                        <p>Small business website for a local bar in Chicago.</p>
                        <br></br>
                        <p><span className="bold">Languages: </span>React, MongoDB, Express, Node.js</p>
                    </div>
                    <div className="projectDiv">
                        <h4>Disc Golf App</h4>
                        <br></br>
                        <p>Online Disc Golf App - Tracks course locations / gives directions / current and future weather info / wind speed</p>
                        <br></br>
                        <p><span className="bold">Languages: </span>Python, Flask, SQL</p>
                    </div>
                </div>
                <div>
                    <div className="projectDiv">
                        <h4>Disc Golf Website</h4>
                        <br></br>
                        <p>Small business website for a disc golf company</p>
                        <br></br>
                        <p><span className="bold">Languages: </span>React, C#</p>
                    </div>
                    <div className="projectDiv">
                        <h4>Alien Game</h4>
                        <br></br>
                        <p>Sci-Fi first person shooter</p>
                        <br></br>
                        <p><span className="bold">Languages: </span>C#, Unity</p>
                    </div>
                </div>
                <div>
                <div className="projectDiv">
                        <h4>Random Project</h4>
                        <br></br>
                        <p>Short Description</p>
                        <br></br>
                        <p><span className="bold">Languages: </span></p>
                    </div>
                    <div className="projectDiv">
                        <h4>Random Project</h4>
                        <br></br>
                        <p>Short Description</p>
                        <br></br>
                        <p><span className="bold">Languages: </span></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projects;