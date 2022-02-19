import React from "react";
import { Link } from "react-router-dom";
import './Skills.css';

const Skills = (props) => {

    return (

        <>

            <div className="skillsDiv">
                <div>
                    <p>Prior to learning programming, I was in the medical research field. I started my transition by first learning SQL and R via Google's Data Analytics Course. Afterwards, I enrolled in an online programming bootcamp to round out my skillset where I learned HMTL, CSS, JavaScript, Python, React, and C#.</p>
                </div>
                <div>
                    <p>As a full-stack web developer specializing in working with small businesses I offer flexibility and customization. I can build your website from scratch according to your specifications and help you decide the most affordable hosting options.</p>
                </div>
            </div>

            <div className="logoDiv">
                <div>
                    <div className="logo" style={{
                        backgroundImage: "url(/img/HTML_logo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                    <br></br>
                    <div className="logo" style={{
                        backgroundImage: "url(/img/React_logo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </div>
                <div>
                    <div className="logo" style={{
                        backgroundImage: "url(/img/CSS_logo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                    <br></br>
                    <div className="logo" style={{
                        backgroundImage: "url(/img/MongoDB_logo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                    <div className="logo" style={{
                        backgroundImage: "url(/img/Python_logo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </div>
                <div>
                    <div className="logo jsLogo" style={{
                        backgroundImage: "url(/img/JS_logo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                    <div className="logo sqlDiv" style={{
                        backgroundImage: "url(/img/SQL_logo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                    <div className="logo coreDiv" style={{
                        backgroundImage: "url(/img/Core_logo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="logo" style={{
                        backgroundImage: "url(/img/Csharp_logo.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </div>
            </div>

        </>
    )
}

export default Skills;