import "./footer.scss";
import React from "react";
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {

    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/ailipriimann/" alt="linkedin">
                <BsLinkedin className="social-media-icon" />
            </a>
            <p>Made by Aili Priimann 2022</p>
        </div>
    )
};

export default Footer;