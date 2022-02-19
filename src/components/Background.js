import React from "react";
import { Link } from "react-router-dom";
import './Background.css';
import Navbar from "./Navbar";

const Background = (props) => {

    return (

        <>

            <div className="mainContentDiv">
                <div className="mainContent" style={{
                    backgroundImage: "url(/img/skyline.jpg)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}>
                    <Navbar/>
                </div>
            </div>

        </>
    )
}

export default Background;