import React from "react";
import { Link } from "react-router-dom";
import './Contact.css';

const Contact = (props) => {

    return (

        <>

            <div className="contactDiv">
                <h3>Contact Me</h3>
                <form className="contactForm">
                    <div className="mb-3 inputDivName">
                        <label for="name" className="form-label">Name </label>
                        <input type="text" className="form-control" id="name"></input>
                    </div>
                    <div className="mb-3 inputDivEmail">
                        <label for="email" className="form-label">Email </label>
                        <input type="email" className="form-control" id="email"></input>
                    </div>
                    <div className="mb-3 inputDivMessage">
                        <label for="message" className="form-label">Message </label>
                        <textarea rows={10} cols={50}></textarea>
                    </div>
                    <button type="submit" className="btn submitButton">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Contact;