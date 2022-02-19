import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = (props) => {

    return (

        <>

            <div className="homeDiv">
                <div className="textDiv">Hi! My name is Alex and I'm a web developer based out of Chicago, Illinois. I enjoy building websites for small businesses and creating innovative web applications.</div>

                <div className="imageDiv" style={{
                    backgroundImage: "url(/img/profilePic.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom 0px left -15px"
                }}></div>
            </div>


        </>
    )
}

export default Home;